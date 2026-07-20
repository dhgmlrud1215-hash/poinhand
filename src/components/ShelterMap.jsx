import { useEffect, useRef, useState } from "react";

function ShelterMap({ shelters }) {
  const mapRef = useRef(null);
  const appKey = import.meta.env.VITE_KAKAO_MAP_KEY;
  const [error, setError] = useState(
    appKey ? "" : "카카오 지도 키가 현재 배포 환경에 설정되지 않았습니다."
  );

  useEffect(() => {
    if (!appKey) {
      console.error("카카오맵 JavaScript 키가 없습니다.");
      return;
    }

    const existingScript = document.querySelector(
      'script[src*="//dapi.kakao.com/v2/maps/sdk.js"]'
    );

    const createMap = () => {
      if (!window.kakao?.maps) {
        setError("카카오 지도 SDK를 불러오지 못했습니다.");
        return;
      }

      window.kakao.maps.load(() => {
        const container = mapRef.current;

        if (!container) return;

        const defaultCenter = new window.kakao.maps.LatLng(
          36.5,
          127.8
        );

        const map = new window.kakao.maps.Map(container, {
          center: defaultCenter,
          level: 13,
        });

        const bounds = new window.kakao.maps.LatLngBounds();

        shelters.forEach((shelter) => {
          const position = new window.kakao.maps.LatLng(
            shelter.latitude,
            shelter.longitude
          );

          const marker = new window.kakao.maps.Marker({
            map,
            position,
          });

          const infoWindow = new window.kakao.maps.InfoWindow({
            content: `
              <div style="
                min-width:180px;
                padding:12px;
                font-size:13px;
                line-height:1.5;
              ">
                <strong>${shelter.name}</strong>
                <p style="margin:6px 0 0;">
                  ${shelter.address}
                </p>
              </div>
            `,
          });

          window.kakao.maps.event.addListener(
            marker,
            "click",
            () => {
              infoWindow.open(map, marker);
            }
          );

          bounds.extend(position);
        });

        if (shelters.length > 0) {
          map.setBounds(bounds);
        }
      });
    };

    if (window.kakao?.maps) {
      createMap();
      return;
    }

    if (existingScript) {
      if (window.kakao?.maps) {
        createMap();
        return;
      }

      const handleExistingScriptLoad = () => {
        if (window.kakao?.maps) {
          createMap();
        } else {
          setError("카카오 지도 인증에 실패했습니다. 배포 도메인과 JavaScript 키를 확인해 주세요.");
        }
      };

      existingScript.addEventListener("load", handleExistingScriptLoad, {
        once: true,
      });

      return () => {
        existingScript.removeEventListener("load", handleExistingScriptLoad);
      };
    }

    const script = document.createElement("script");

    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
    script.async = true;
    script.dataset.kakaoMap = "true";
    const handleScriptLoad = () => {
      if (window.kakao?.maps) {
        createMap();
      } else {
        setError("카카오 지도 인증에 실패했습니다. 배포 도메인과 JavaScript 키를 확인해 주세요.");
      }
    };
    script.addEventListener("load", handleScriptLoad);
    const handleScriptError = () => {
      setError("지도를 불러오지 못했습니다. 카카오 JavaScript 키와 등록 도메인을 확인해 주세요.");
    };
    script.addEventListener("error", handleScriptError);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", handleScriptLoad);
      script.removeEventListener("error", handleScriptError);
    };
  }, [appKey, shelters]);

  return (
    <div className="shelter-map-wrap">
      <div
        ref={mapRef}
        className="shelter-map"
        aria-label="전국 동물보호소 지도"
      />
      {error && <p className="shelter-map-error">{error}</p>}
    </div>
  );
}

export default ShelterMap;

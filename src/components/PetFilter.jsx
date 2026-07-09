import { useState } from "react";

const initialFilters = {
  지역: "모든 지역",
  동물: "전체",
  성별: "전체",
  중성화: "전체",
};

function PetFilter({ selectedFilters, onChange }) {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [openFilter, setOpenFilter] = useState(null);

  const filters = ["전체", "지역", "동물", "성별", "중성화"];

  const filterOptions = {
    지역: [
      "모든 지역",
      "서울특별시",
      "부산광역시",
      "대구광역시",
      "인천광역시",
      "세종특별자치시",
      "대전광역시",
      "울산광역시",
      "경기도",
      "강원특별자치도",
      "충청북도",
      "충청남도",
      "전북특별자치도",
      "전라남도",
      "경상북도",
      "경상남도",
      "제주특별자치도",
    ],
    동물: ["전체", "강아지", "고양이", "기타"],
    성별: ["전체", "남아", "여아"],
    중성화: ["전체", "완료", "미완료", "확인중"],
  };

  const getFilterLabel = (filter) => {
    if (filter === "전체") return filter;

    const selected = selectedFilters[filter];
    const isDefault = selected === "전체" || selected === "모든 지역";

    return isDefault ? filter : `${filter}: ${selected}`;
  };

  return (
    <>
      <div className="filter-area">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? "active" : ""}
            onClick={() => {
              setActiveFilter(filter);

              if (filter === "전체") {
                onChange(initialFilters);
                setOpenFilter(null);
              } else {
                setOpenFilter(openFilter === filter ? null : filter);
              }
            }}
          >
            {getFilterLabel(filter)} {filter !== "전체" && "▾"}
          </button>
        ))}
      </div>

      {openFilter && filterOptions[openFilter] && (
        <div className="filter-option-box">
          {filterOptions[openFilter].map((option) => (
            <button
              type="button"
              key={option}
              className={selectedFilters[openFilter] === option ? "active" : ""}
              onClick={() => {
                onChange({
                  ...selectedFilters,
                  [openFilter]: option,
                });
                setOpenFilter(null);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default PetFilter;

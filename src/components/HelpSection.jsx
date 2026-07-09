import { useState } from "react";
import { Link } from "react-router-dom";
import PetFilter from "./PetFilter";
import animals from "../data/animals";

const initialFilters = {
  지역: "모든 지역",
  동물: "전체",
  성별: "전체",
  중성화: "전체",
};

function HelpSection() {
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);

  const filteredAnimals = animals.filter((animal) => {
    const regionMatches =
      selectedFilters.지역 === "모든 지역" ||
      animal.region === selectedFilters.지역;
    const typeMatches =
      selectedFilters.동물 === "전체" ||
      animal.type === selectedFilters.동물;
    const genderMatches =
      selectedFilters.성별 === "전체" ||
      animal.gender === selectedFilters.성별;
    const neuteredMatches =
      selectedFilters.중성화 === "전체" ||
      animal.neutered === selectedFilters.중성화;

    return regionMatches && typeMatches && genderMatches && neuteredMatches;
  });

  return (
    <section className="help-section home-section">
      <div className="section-title">
        <h2>새로운 가족을 기다리는 아이들</h2>
        <button type="button" className="more-btn">전체보기</button>
      </div>

      <PetFilter
        selectedFilters={selectedFilters}
        onChange={setSelectedFilters}
      />

      <div className="pet-list">
        {filteredAnimals.map((animal) => (
          <Link
            to={`/animal/${animal.id}`}
            className="pet-card"
            key={animal.id}
          >
            <img src={animal.image} alt={animal.name} />
            <strong>{animal.name}</strong>
            <p>{animal.info}</p>
          </Link>
        ))}
      </div>

      {filteredAnimals.length === 0 && (
        <p className="filter-empty">조건에 맞는 아이가 없습니다.</p>
      )}
    </section>
  );
}

export default HelpSection;

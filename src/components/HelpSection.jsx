import { Link } from "react-router-dom";
import PetFilter from "./PetFilter";
import animals from "../data/animals";


function HelpSection() {
  return (
    <section className="help-section home-section">
      <div className="section-title">
        <h2>새로운 가족을 기다리는 아이들</h2>
        <button type="button" className="more-btn">전체보기</button>
      </div>

      <PetFilter />

      <div className="pet-list">
        {animals.map((animal) => (
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
    </section>
  );
}

export default HelpSection;
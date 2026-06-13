import type { Equipaments } from "../../types/equipament.types";
import "./index.css";

interface EquipamentCardProps {
  equipament: Equipaments;
}

function EquipamentCard({ equipament }: EquipamentCardProps) {
  return (
    <div className={`equipament-card ${equipament.status ? "available" : "unavailable"}`}>
      <h3>{equipament.name}</h3>
      <p>{equipament.status ? "Disponível" : "Indisponível"}</p>
    </div>
  );
}

export default EquipamentCard;

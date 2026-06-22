import type { Equipment } from "../../types/equipment.type";
import "./index.css"

interface EquipmentCardProps {
    equipment: Equipment;
}

export function EquipmentCard({equipment}: EquipmentCardProps) {
    return (
        <div className="equipment-card">
            <h3>{equipment.name}</h3>
            <p>{equipment.status ? "Disponível" : "Indisponível"}</p>
        </div>
    )
}
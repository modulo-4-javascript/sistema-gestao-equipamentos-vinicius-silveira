import type { Equipment } from "../../types/equipment.type";
import { EquipmentCard } from "../EquipmentCard";
import "./index.css";

interface EquipmentListProps {
    equipments: Equipment[]
}

export function EquipmentList({ equipments }: EquipmentListProps) {
    return <div>
        <h2>Equipamentos</h2>
        <ul>
            {equipments.map((e) => <EquipmentCard equipment={e} />)}
        </ul>
    </div>;
}
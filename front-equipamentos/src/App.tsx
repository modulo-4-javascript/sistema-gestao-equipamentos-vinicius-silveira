import "./App.css";
import { EquipmentList } from "./components/EquipmentList";
import { equipments } from "./data/equipments.mock";

function App() {
  return <>
    <EquipmentList equipments={equipments} />
  </>;
}

export default App;

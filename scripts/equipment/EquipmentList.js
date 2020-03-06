import { useEquipment } from "./equipmentDataProvider.js";
import { Equipment } from "./Equipment.js"


export const EquipmentList = () => {
    const contentElement = document.querySelector(".equipments")
    const equipmentArray = useEquipment()
    for (const equipmentObj of equipmentArray) {
        contentElement.innerHTML += Equipment(equipmentObj)
    }
}
import { Dashboard } from "./Dashboard.js";
import { EmployeeList } from "../employee/EmployeeList.js";
import { EquipmentList } from "../equipment/EquipmentList.js";
import { ProductList } from "../product/ProductList.js";
import { Footer } from "../nav/Footer.js";


const contentTarget = document.querySelector(".main")

export const makeDashboard = () => {
    contentTarget.innerHTML = Dashboard()
    EmployeeList()
    EquipmentList()
    ProductList()
    Footer();
}



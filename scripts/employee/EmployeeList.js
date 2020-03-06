import { useEmployee } from "./employeeDataProvider.js";
import { Employee } from "./Employee.js";



export const EmployeeList = () => {
    const contentElement = document.querySelector(".employees")
    const employeeArray = useEmployee()
    for (const employeeObj of employeeArray) {
        contentElement.innerHTML += Employee(employeeObj)
    }
}
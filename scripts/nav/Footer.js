import { YearEstablished } from "./YearEstablished.js"
import { BusinessName } from "./BusinessName.js"
import { ContactList } from "./contact/ContactList.js"


export const Footer = () => {
    const businessHTML = BusinessName()
    const yearEstablishedHTML = YearEstablished()
    const contactListHTML = ContactList()
    const contentTarget = document.querySelector(".footer")

    contentTarget.innerHTML = `
        ${contactListHTML}
        ${businessHTML}
        ${yearEstablishedHTML}
    `
}
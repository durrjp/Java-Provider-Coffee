export const Equipment = (equipment) => {
    return `
        <div class="equipment">
            <div class="equipment__header">${equipment.model}</div>
            <div class="equipment__info">${equipment.serialNumber}</div>
            <div class="equipment__info">Functional: ${equipment.isFunctional ? "Yes" : "No"}</div>
            <div class="equipment__info">Under Warranty: ${equipment.isUnderWarranty ? "✅" : "❌"}</div>
        </div>
    `
}
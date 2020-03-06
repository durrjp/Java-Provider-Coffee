export const Employee = (employee) => {
    return `
        <div class ="employee">
            <div class="">${employee.firstName} ${employee.lastName}</div>
            <div class="">${employee.jobTitle}</div>
            <div class="">${employee.hoursScheduled}</div>
        </div>
    `
}
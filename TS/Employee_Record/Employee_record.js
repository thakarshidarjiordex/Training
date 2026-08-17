"use strict";
var Department;
let show=document.getElementById("employee-container");
(function (Department) {
    Department["HR"] = "HR";
    Department["IT"] = "IT";
    Department["SALES"] = "SALES";
    Department["FINANCE"] = "FINANCE";
})(Department || (Department = {}));
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["INACTIVE"] = "INACTIVE";
})(Status || (Status = {}));
const employees = [
    [101, "Rahul", Department.IT, 50000, Status.ACTIVE],
    [102, "Amit", Department.HR, 40000, Status.ACTIVE],
    [103, "Priya", Department.SALES, 45000, Status.INACTIVE]
];
function displayEmployees(employees) {
    employees.forEach(employee => {
        console.log(`
            ID: ${employee[0]}
            Name: ${employee[1]}
            Department: ${employee[2]}
            Salary: ₹${employee[3]}
            Status: ${employee[4]}
            -------------------------
        `);
            show.innerHTML += `
            <div class="employee-card">
                <h3>ID: ${employee[0]}</h3>
                <p>Name: ${employee[1]}</p>
                <p>Department: ${employee[2]}</p>
                <p>Salary: ₹${employee[3]}</p>
                <p>Status: ${employee[4]}</p>
            </div>
        `;
    });
}
displayEmployees(employees);

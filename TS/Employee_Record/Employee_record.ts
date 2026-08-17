enum Department {
    HR = "HR",
    IT = "IT",
    SALES = "SALES",
    FINANCE = "FINANCE"
}

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

type Employee = [
    number,       // ID
    string,       // Name
    Department,   // Department
    number,       // Salary
    Status        // Status
];

const employees: Employee[] = [
    [101, "Rahul", Department.IT, 50000, Status.ACTIVE],
    [102, "Amit", Department.HR, 40000, Status.ACTIVE],
    [103, "Priya", Department.SALES, 45000, Status.INACTIVE]
];

function displayEmployees(employees: Employee[]): void {
    employees.forEach(employee => {
        console.log(`
            ID: ${employee[0]}
            Name: ${employee[1]}
            Department: ${employee[2]}
            Salary: ₹${employee[3]}
            Status: ${employee[4]}
            -------------------------
        `);
    });
}

displayEmployees(employees);
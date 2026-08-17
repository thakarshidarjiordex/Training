interface Admin {
    name: string;
    role: "admin";
    permissions: string[];
}

interface Manager {
    name: string;
    role: "manager";
    department: string;
}

interface Employee {
    name: string;
    role: "employee";
    salary: number;
}

type User = Admin | Manager | Employee;


// Type Guards

function isAdmin(user: User): user is Admin {
    return user.role === "admin";
}

function isManager(user: User): user is Manager {
    return user.role === "manager";
}


// Role-Based Access

function checkAccess(user: User) {

    if (isAdmin(user)) {

        console.log(`${user.name} is an Admin`);
        console.log("Permissions:", user.permissions);

    }
    else if (isManager(user)) {

        console.log(`${user.name} is a Manager`);
        console.log("Department:", user.department);

    }
    else {

        console.log(`${user.name} is an Employee`);
        console.log("Salary:", user.salary);
    }
}


// Users

const admin: Admin = {
    name: "Thakarshi",
    role: "admin",
    permissions: [
        "create-user",
        "delete-user",
        "update-user"
    ]
};

const manager: Manager = {
    name: "Rahul",
    role: "manager",
    department: "Sales"
};

const employee: Employee = {
    name: "Amit",
    role: "employee",
    salary: 30000
};


// Test

checkAccess(admin);

console.log("----------------");

checkAccess(manager);

console.log("----------------");

checkAccess(employee);
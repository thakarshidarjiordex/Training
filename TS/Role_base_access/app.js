"use strict";
// Type Guards
function isAdmin(user) {
    return user.role === "admin";
}
function isManager(user) {
    return user.role === "manager";
}
// Role-Based Access
function checkAccess(user) {
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
const admin = {
    name: "Thakarshi",
    role: "admin",
    permissions: [
        "create-user",
        "delete-user",
        "update-user"
    ]
};
const manager = {
    name: "Rahul",
    role: "manager",
    department: "Sales"
};
const employee = {
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

"use strict";
// ==========================================
// User Profile System
// Topic: Interfaces
// ==========================================
// 3. User Array
let users = [
    {
        id: 1,
        name: "Rahul",
        email: "rahul@gmail.com",
        age: 25,
        phone: "9876543210"
    },
    {
        id: 2,
        name: "Amit",
        email: "amit@gmail.com",
        age: 28
    },
    {
        id: 3,
        name: "Priya",
        email: "priya@gmail.com",
        age: 24,
        phone: "9876501234"
    }
];
// ==========================================
// 4. Display Users
// ==========================================
function displayUsers() {
    console.log("========== USER PROFILES ==========");
    users.forEach((user) => {
        console.log(`ID       : ${user.id}`);
        console.log(`Name     : ${user.name}`);
        console.log(`Email    : ${user.email}`);
        console.log(`Age      : ${user.age}`);
        console.log(`Phone    : ${user.phone ?? "Not Provided"}`);
        console.log("-----------------------------------");
    });
}
// ==========================================
// 5. Find User
// ==========================================
function findUser(id) {
    return users.find((user) => user.id === id);
}
// ==========================================
// 6. Add User
// ==========================================
function addUser(user) {
    users.push(user);
    console.log(`${user.name} added successfully.`);
}
// ==========================================
// 7. Update User
// ==========================================
function updateUser(id, name, age) {
    const user = users.find((user) => user.id === id);
    if (user) {
        user.name = name;
        user.age = age;
        console.log("User updated successfully.");
    }
    else {
        console.log("User not found.");
    }
}
// ==========================================
// 8. Delete User
// ==========================================
function deleteUser(id) {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        console.log("User deleted successfully.");
    }
    else {
        console.log("User not found.");
    }
}
// ==========================================
// 9. Admin
// ==========================================
const admin = {
    id: 100,
    name: "Admin",
    email: "admin@gmail.com",
    age: 30,
    role: "Administrator",
    permissions: [
        "Create User",
        "Update User",
        "Delete User"
    ]
};
console.log("========== ADMIN ==========");
console.log(`Name : ${admin.name}`);
console.log(`Email : ${admin.email}`);
console.log(`Role : ${admin.role}`);
console.log(`Permissions : ${admin.permissions.join(", ")}`);
// ==========================================
// 10. Test the System
// ==========================================
displayUsers();
console.log("========== FIND USER ==========");
const user = findUser(2);
if (user) {
    console.log(user);
}
else {
    console.log("User not found.");
}
console.log("========== ADD USER ==========");
addUser({
    id: 4,
    name: "Jay",
    email: "jay@gmail.com",
    age: 22,
    phone: "9876543211"
});
console.log("========== AFTER ADD ==========");
displayUsers();
console.log("========== UPDATE USER ==========");
updateUser(4, "Jay Patel", 23);
console.log("========== AFTER UPDATE ==========");
displayUsers();
console.log("========== DELETE USER ==========");
deleteUser(2);
console.log("========== AFTER DELETE ==========");
displayUsers();

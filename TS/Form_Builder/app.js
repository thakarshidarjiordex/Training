"use strict";
let formData = {};
function updateField(field, value) {
    formData[field] = value;
}
const form = document.getElementById("userForm");
const output = document.getElementById("output");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = Number(document.getElementById("age").value);
    const password = document.getElementById("password").value;
    updateField("name", name);
    updateField("email", email);
    updateField("age", age);
    updateField("password", password);
    const data = {
        name: formData.name,
        email: formData.email,
        age: formData.age
    };
    output.textContent = JSON.stringify(data, null, 2);
});

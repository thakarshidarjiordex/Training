interface FormData {
    name: string;
    email: string;
    age: number;
    password: string;
}

type FormValues = Partial<FormData>;

let formData: FormValues = {};

function updateField(
    field: keyof FormData,
    value: string | number
) {
    formData[field] = value as never;
}

const form = document.getElementById("userForm") as HTMLFormElement;
const output = document.getElementById("output") as HTMLElement;


form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const age = Number((document.getElementById("age") as HTMLInputElement).value);
    const password = (document.getElementById("password") as HTMLInputElement).value;

    updateField("name", name);
    updateField("email", email);
    updateField("age", age);
    updateField("password", password);


    const data: Omit<FormData, "password"> = {
        name: formData.name!,
        email: formData.email!,
        age: formData.age!
    };


    output.textContent = JSON.stringify(
        data,
        null,
        2
    );
});
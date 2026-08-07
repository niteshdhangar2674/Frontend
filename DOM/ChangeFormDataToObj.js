const form_element = document.getElementById("bmi");

form_element.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const obj = {};
    formData.forEach((value, key) => {
        obj[key] = value;
    })

    console.log(obj);
});
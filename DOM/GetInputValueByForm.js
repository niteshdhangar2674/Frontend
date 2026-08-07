const form_element = document.getElementById("bmi");

form_element.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const height = parseFloat(formData.get("height"));
    const weight = parseFloat(formData.get("weight"));

    const bmi = weight / (height * height);

    document.getElementById("result").innerText = "your BMI is " + bmi.toFixed(2);

});
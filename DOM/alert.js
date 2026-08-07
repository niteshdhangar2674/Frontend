const headline = document.querySelector(".headline");
const btn = document.querySelector(".btn");

btn.onclick = () => {
    alert("headline is removed");
    headline.remove();
    // btn.remove();
}
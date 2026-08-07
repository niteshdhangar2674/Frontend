const box = document.querySelector(".box");

const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {

        box.classList.remove("red", "green", "blue");
        box.classList.add(e.target.innerText.toLowerCase());
    })
});
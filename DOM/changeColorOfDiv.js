const div = document.getElementById("div1");

document.addEventListener("click", (e) => {
    if (e.target.matches("#green")) {
        div.style.backgroundColor = e.target.innerText.toLowerCase();
    }
    if (e.target.matches("#red")) {
        div.style.background = e.target.innerText.toLowerCase();
    }
    if (e.target.matches("#blue")) {
        div.style.background = e.target.innerText.toLowerCase();
    }
    if (e.target.matches("#black")) {
        div.style.background = e.target.innerText.toLowerCase();
    }

})
// div_ele.style.background = "green";
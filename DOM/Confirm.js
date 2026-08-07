const headline = document.querySelector(".headline");
const btn = document.querySelector(".btn");

btn.onclick = () => {
    const isRemove = confirm("remove headline !");

    if (isRemove) headline.remove();
}
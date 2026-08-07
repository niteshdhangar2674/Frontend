const container = document.querySelector(".container");

const cards = [

    { title: "Card 1", content: "Content for card 1" },
    { title: "Card 2", content: "Content for card 2" },
    { title: "Card 3", content: "Content for card 3" },
    { title: "Card 4", content: "Content for card 4" },
    { title: "Card 5", content: "Content for card 5" },
    { title: "Card 6", content: "Content for card 6" },
    { title: "Card 7", content: "Content for card 7" },
    { title: "Card 8", content: "Content for card 8" },
    { title: "Card 9", content: "Content for card 9" },
]

function createCard(obj) {
    const h3_element = document.createElement("h3");
    h3_element.innerText = obj.title;

    const p_element = document.createElement("p");
    p_element.innerText = obj.content;






    const cardDiv = document.createElement("div");

    cardDiv.classList.add("card");

    cardDiv.append(h3_element, p_element);

    return cardDiv;
}


cards.forEach(obj => {
    const card = createCard(obj);
    container.append(card);
})
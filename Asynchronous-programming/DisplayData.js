const btn = document.getElementById("btn");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            data.forEach(user => {
                const userId = document.createElement("h2");
                userId.innerText = "Id" + " : " + user.id;

                const title = document.createElement("p");
                title.innerHTML = `<b>Title : </b>${user.title}`;

                const body = document.createElement("p");
                body.innerHTML = `<b>Body : </b>${user.body}`;

                const div = document.createElement("div");
                div.classList.add("div");

                div.append(userId, title, body);

                container.append(div);

            })

        })
        .catch(err => console.log(err));
})

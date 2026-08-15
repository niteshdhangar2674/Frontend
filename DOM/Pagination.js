const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const buttonDiv = document.getElementById("buttonContains");
const postDiv = document.getElementById("postContains");

function displayPost(post) {
    // postDiv.innerHTML = "";

    const userId = document.createElement("h1");
    userId.innerHTML = `<b>userId : </b> ${post.id}`;

    const title = document.createElement("h3");
    title.innerHTML = `<b>Title : </b> ${post.title}`

    const body = document.createElement("p");
    body.innerHTML = `<b>body : </b> ${post.body}`;

    const divP = document.createElement("div");
    divP.classList.add("userDiv");

    divP.append(userId, title, body);

    postDiv.append(divP);

};


document.getElementById("btn").addEventListener("click", () => {

    let noOfPost = document.getElementById("pid").value;
    noOfPost = parseInt(noOfPost);
    let sortValue = document.getElementById("sort").value;

    const apiUrl = `${baseUrl}?_limit=${noOfPost}&_sort=${sortValue}`;

    fetch(apiUrl)
        .then(Response => {
            let totale_item = Response.headers.get("X-Total-Count");
            let limit = noOfPost;

            let totalPage = Math.ceil(totale_item / limit);

            buttonDiv.innerHTML = "";

            for (let i = 1; i <= totalPage; i++) {
                const buttonElement = document.createElement("button");

                buttonElement.innerHTML = i;

                buttonElement.addEventListener("click", () => {
                    fetch(`${apiUrl}&_page=${i}`)
                        .then(res => res.json())
                        .then(posts => {
                            postDiv.innerHTML = "";
                            posts.forEach(post => displayPost(post));
                        })
                        .catch(ele => console.log(ele));
                })
                buttonDiv.append(buttonElement);
            }

        })
})


const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const form_Data = document.getElementById("postForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    let PostData = {};
    formData.forEach((value, key) => {
        PostData[key] = value;
    });

    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(PostData)
    })
        .then(res => res.json())
        .then(data => {
            alert("New Post created successfully with id" + data.id);
            console.log("new post :", data);
            event.target.reset();
        })
        .catch(err => console.log(err));



})
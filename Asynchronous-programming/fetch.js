// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => conswole.log(err));

async function data() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        console.log(result);
    }
    catch (err) { console.log(err) };
}
data();
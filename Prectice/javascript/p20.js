fetch("https://jsonplaceholder.typicode.com/posts?_limit=30")
    .then(res => {
        let totale_item = res.headers.get("X-Total-Count");
        console.log(totale_item);
    })

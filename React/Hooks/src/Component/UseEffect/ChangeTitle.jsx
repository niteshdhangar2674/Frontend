import { useEffect, useState } from "react";

const ChangeTitle = () => {
    const [page, setPage] = useState("products");
    const [cardCount, setCardCount] = useState(1);

    useEffect(() => {
        if (page === "products") {
            document.title = "Products | shopEasy"
        }
        else if (page === "card") {
            document.title = `card ${cardCount} | shopEasy`
        }
    }, [page, cardCount])
    return (
        <>
            <h1>current page : {page}</h1>

            <button onClick={() => setPage("products")}>products</button>
            <button onClick={() => setPage("card")}>card</button>
            <button onClick={() => setCardCount(curr => curr + 1)}>increase</button>
        </>
    )
}
export default ChangeTitle;
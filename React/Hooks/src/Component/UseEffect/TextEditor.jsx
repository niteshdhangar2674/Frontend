import { useEffect, useState } from "react";

const TextEditor = () => {
    const [content, setContent] = useState(() => {
        return localStorage.getItem("content") || "";
    });

    useEffect(() => {
        localStorage.setItem("content", content)
    }, [content])
    return (
        <>
            <h1>TextEditor</h1>
            <textarea cols="40" rows="10" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your content here...." />
        </>
    )
}
export default TextEditor;
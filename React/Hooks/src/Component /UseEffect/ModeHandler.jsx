import { useEffect, useState } from "react";

const ModeHandle = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])
    return (
        <div style={{
            minHeight: "100vh",
            padding: "40px",
            background: theme === "light" ? "#fff" : "#111",
            color: theme === "light" ? "#111" : "#fff"
        }}>
            <h1>Employee DashBoard</h1>
            <p>theme : {theme}</p>
            <button onClick={() => setTheme((currTheme) => (currTheme === "light" ? "black" : "light"))}>Toggle theme</button>
        </div>
    )
}
export default ModeHandle;
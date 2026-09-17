function Hello() {
    const fun = () => {
        alert("hello brother!")
    }
    return (
        <>
            <h1>welcome to my project</h1>
            <button onClick={fun}>click</button>
        </>
    )
}
export default Hello;
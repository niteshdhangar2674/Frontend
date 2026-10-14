export function Navbar() {
    return (
        <div>
            <div className="flex items-center bg-gray-900 text-white p-4 min-w-[400px]">
                <h1 className="flex justify-start">DevBoard</h1>
                <div className="flex ml-auto gap-4">
                    <div className="flex items-center gap-4">
                        <a href="">Home</a>
                        <a href="">Projects</a>
                        <a href="">Profile</a>
                    </div>


                    <h1 className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-600">ND</h1>
                </div>
            </div>
            <div className="flex min-h-screen" >
                <div className="w-[200px] bg-gray-300">
                    <h1>sidebar</h1>
                </div>
                <div className="">
                    <h1>Cards</h1>
                </div>
            </div>

        </div>
    )
}
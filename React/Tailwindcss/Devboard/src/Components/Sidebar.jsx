export function Sidebar() {
    return (
        <aside className="hidden md:block w-50 min-h-screen bg-gray-600 text-white p-6">
            <h1 className="text-2xl font-bold mb-8">Devbord</h1>
            <nav className="space-y-2">
                <a href="#" className="block bg-blue-600 px-6 py-3 rounded-lg">Dashbord</a>
                <a href="#" className=" block  px-6 py-3 rounded-lg hover:bg-gray-500">Projects</a>
                <a href="#" className="block px-6 py-3 rounded-lg hover:bg-gray-500">Tasks</a>
                <a href="#" className="block px-6 py-3 rounded-lg hover:bg-gray-500">Settings</a>
            </nav>
        </aside>
    )
}
export function StatCard({ title = "title", value = "value", description = "description" }) {
    return (
        <div className="bg-while p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md">
            <p className="text-xm text-gray-500">{title}</p>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">{value}</h1>
            <p className="text-sm text-green-600 mt-2">{description}</p>
        </div>
    )
}

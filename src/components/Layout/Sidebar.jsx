export default function Sidebar() {
    return (
        <div className="h-screen w-64 bg-gray-900 text-white p-5">
            <h2 className="text-xl font-bold mb-6">Finance App</h2>

            <ul className="space-y-4">
                <li className="cursor-pointer hover:text-gray-300">Dashboard</li>
                <li className="cursor-pointer hover:text-gray-300">Transactions</li>
                <li className="cursor-pointer hover:text-gray-300">Insights</li>
            </ul>
        </div>
    );
}
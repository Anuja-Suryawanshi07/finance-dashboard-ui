import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="h-screen w-64 bg-gray-900 text-white p-5">
            <h2 className="text-xl font-bold mb-6">Finance App</h2>

            <ul className="space-y-4">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/transactions">Transactions</Link></li>
                <li><Link to="/insights">Insights</Link></li>
            </ul>
        </div>
    );
}
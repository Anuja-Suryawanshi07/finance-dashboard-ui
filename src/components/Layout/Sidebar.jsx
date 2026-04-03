import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-900 dark:bg-gray-950 text-white p-5 flex flex-col">

      {/* Title */}
      <h2 className="text-xl font-bold mb-8">Finance App</h2>

      {/* Navigation */}
      <ul className="space-y-2">
        <li>
          <Link 
            to="/" 
            className="block px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-800 transition"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link 
            to="/transactions" 
            className="block px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-800 transition"
          >
            Transactions
          </Link>
        </li>

        <li>
          <Link 
            to="/insights" 
            className="block px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-800 transition"
          >
            Insights
          </Link>
        </li>
      </ul>

    </div>
  );
}
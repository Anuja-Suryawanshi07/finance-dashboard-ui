import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";

export default function Navbar() {
    const { role, setRole, theme, setTheme } = useContext(FinanceContext);
    const data = useContext(FinanceContext);
    console.log("Context:", data);

    return (
        <div className="flex justify-between items-center mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h1 className="text-xl font-bold text-black dark:text-white">Dashboard</h1>

            <div className="flex gap-4 items-center">
                {/* Dark Mode Toggle */}
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"    
                >
                    {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>

                {/* Role Switch */}
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white"
                >
                    <option value="viewer">Viewer</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
        </div>
    );    
}    
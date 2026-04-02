import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";

export default function Navbar() {
    const { role, setRole } = useContext(FinanceContext);
    const data = useContext(FinanceContext);
    console.log("Context:", data);

    return (
        <div className="flex justify-between items-center bg-white shadow p-4">
            <h1 className="text-lg font-semibold">Dashboard</h1>

            <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border p-2 rounded"
            >
                <option value="viewer">Viewer</option>
                <option value="admin">Admin</option>
            </select>
        </div>
    );
}
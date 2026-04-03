import { useContext, useState } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function Transactions() {
    const { transactions = [], setTransactions, role } = useContext(FinanceContext);

    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");

    // Filter Logic

    const filteredTransactions = transactions.filter((t) => {
        const matchesSearch = t.category
        .toLowerCase()
        .includes(search.toLowerCase());

        const matchsType = typeFilter === "all" || t.type === typeFilter;

        return matchesSearch && matchsType;
    });

    const handleDelete = (id) => {
        const updatedTransactions = transactions.filter(t => t.id !== id);
        setTransactions(updatedTransactions);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Transactions</h1>

            {/* Search + Filter */}
            <div className="flex gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by category..."
                    className="border p-2 rounded w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                /> 

                <select
                    className="border p-2 rounded text-gray-500"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>    
                </select>   
            </div>

            {/* Table */}

            <div className="bg-white rounded-xl shadow">
                <table className="w-full bg-white dark:bg-gray-800 text-black dark:text-white">
                    <thead className="border-b">
                        <tr>
                            <th className="p-3">Date</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Type</th>
                            <th className="p-3">Amount</th>
                            {role === "admin" && (
                                <th className="p-3">Actions</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map((t) => (
                                <tr key={t.id} className="border-b">
                                    <td className="p-3">{t.date}</td>
                                    <td className="p-3">{t.category}</td>
                                    <td className="p-3 capitalize">{t.type}</td>
                                    <td className="p-3">₹ {t.amount}</td>

                                    {role === "admin" && (
                                        <td className="p-3">
                                            <button className="text-gray-400 mr-2 cursor-not-allowed">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDelete(t.id)}
                                            className="text-red-500">
                                                Delete
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))
                        ) : ( 
                            <tr>
                                <td className="p-4 text-center" colSpan="5">
                                    No transactions found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
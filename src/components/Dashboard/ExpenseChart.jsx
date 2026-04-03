import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import {PieChart, Pie, Cell, Tooltip } from "recharts";

// const data = [
//     { name: "Food", value: 400 },
//     { name: "Traval", value: 300 },
//     { name: "Shopping", value: 300 },
// ];

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#f50bed"];

export default function ExpenseChart() {
    const { transactions = [] } = useContext(FinanceContext);

    const categoryData = {};

    transactions
        .filter((t) => t.type === "expense")
        .forEach((t) => {
            categoryData[t.category] = (categoryData[t.category] || 0) + t.amount
        });

        const data = Object.keys(categoryData).map((key) => ({
            name: key,
            value: categoryData[key],
        }));

    return (
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md">
            <h2 className="font-semibold mb-4">Spending Breakdown</h2>

            <PieChart width={300} height={300}>
                <Pie 
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                >
                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie> 
                <Tooltip />   
            </PieChart>
        </div>
    );
}
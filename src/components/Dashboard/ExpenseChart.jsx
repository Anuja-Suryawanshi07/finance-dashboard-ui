import {PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
    { name: "Food", value: 400 },
    { name: "Traval", value: 300 },
    { name: "Shopping", value: 300 },
];

const COLORS = ["#6366f1", "#22c55e", "#f59e0b"];

export default function ExpenseChart() {
    return (
        <div className="bg-white p-5 rounded-2xl shadow-md">
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
                        <Cell key={index} fill={COLORS[index]} />
                    ))}
                </Pie> 
                <Tooltip />   
            </PieChart>
        </div>
    );
}
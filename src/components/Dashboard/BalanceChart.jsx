import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", balance: 4000 },
    { month: "Feb", balance: 3000 },
    { month: "Mar", balance: 5000 },
    { month: "Apr", balance: 4500 },
];

export default function BalanceChart() {
    return (
        <div className="bg-white p-5 rounded-2xl shadow-md">
            <h2 className="font-semibold mb-4">Balance Trend</h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="balance" stroke="#6366f1" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
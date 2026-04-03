import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// const data = [
//     { month: "Jan", balance: 4000 },
//     { month: "Feb", balance: 3000 },
//     { month: "Mar", balance: 5000 },
//     { month: "Apr", balance: 4500 },
// ];

export default function BalanceChart() {
    const { transactions = [] } = useContext(FinanceContext);

    // create monthly data
    const monthlyData = {};

    transactions.forEach((t) => {
        const month = new Date(t.date).toLocaleString("default", { month: "short" });

        if (!monthlyData[month]) {
            monthlyData[month] = 0;
        }

        if (t.type === "income") {
            monthlyData[month] += t.amount;
        } else {
            monthlyData[month] -= t.amount;
        }
    });

    const chartData = Object.keys(monthlyData).map((month) => ({
        month,
        balance: monthlyData[month],
    }));

    return (
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md">
            <h2 className="font-semibold mb-4">Balance Trend</h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="balance" stroke="#6366f1" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
export default function SummaryCard({ title, amount }) {
    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">{title}</h3>
            <p className="text-2xl font-bold mt-2 text-indigo-600">₹ {amount}</p>
        </div>
    );
}
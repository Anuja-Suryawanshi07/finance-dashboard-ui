import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function Insights() {
  const { transactions = [] } = useContext(FinanceContext);

  // Highest Spending Category
  const expenseTransactions = transactions.filter((t) => t.type === "expense");

  const categoryTotals = {};

  expenseTransactions.forEach((t) => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  const highestCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    Object.keys(categoryTotals)[0],
  );

  // Monthly Comparison

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = expenseTransactions.reduce(
    (acc, t) => acc + t.amount,
    0,
  );

  // Insight

  const insight =
    totalExpense > totalIncome
      ? "You are spending more than you earn."
      : "Your finances are in good shape!";

  return (
<div>
  <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
    Insights
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Highest Category */}
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow">
      <h2 className="font-semibold mb-2">Highest Spending Category</h2>
      <p className="text-lg font-bold">{highestCategory || "No data"}</p>
    </div>

    {/* Monthly Comparison */}
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow">
      <h2 className="font-semibold mb-2">Income vs Expense</h2>
      <p>Income: ₹ {totalIncome}</p>
      <p>Expense: ₹ {totalExpense}</p>
    </div>

    {/* Insight */}
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow">
      <h2 className="font-semibold mb-2">Observation</h2>
      <p>{insight}</p>
    </div>

  </div>
</div>
  );
}


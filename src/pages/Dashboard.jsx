import SummaryCards from "../components/Dashboard/SummaryCards";
import BalanceChart from "../components/Dashboard/BalanceChart";
import ExpenseChart from "../components/Dashboard/ExpenseChart";


export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Financial Overview
      </h1>

      <SummaryCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <BalanceChart />
          <ExpenseChart />
      </div>  
    </div>
  );
}
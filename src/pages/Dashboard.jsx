import SummaryCards from "../components/Dashboard/SummaryCards";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Financial Overview
      </h1>

      <SummaryCards />
    </div>
  );
}
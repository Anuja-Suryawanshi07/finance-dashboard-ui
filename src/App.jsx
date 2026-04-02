import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insighs";


export default function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
      <Route path="/"element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/insights" element={<Insights />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}
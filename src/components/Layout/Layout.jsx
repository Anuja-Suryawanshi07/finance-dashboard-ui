import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        
        <Navbar />

        <div className="p-6 w-full">
          {children}
        </div>

      </div>

    </div>
  );
}
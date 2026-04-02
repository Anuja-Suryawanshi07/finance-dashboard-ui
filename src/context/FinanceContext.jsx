import { Children } from "react";
import { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const [role, setRole] = useState("viewer");

    return (
        <FinanceContext.Provider
            value={{ transactions, setTransactions, role, setRole }}
        >
            {children}
        </FinanceContext.Provider>    
    );
};
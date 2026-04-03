import { Children } from "react";
import { createContext, useState, useEffect } from "react";
import { transactionsData } from "../data/mockData";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
    // Load from localStorage OR fallback to mockData
    const [transactions, setTransactions] = useState(() => {
     const savedData = localStorage.getItem("transactions");
     return savedData ? JSON.parse(savedData) : transactionsData;   
    });
    const [role, setRole] = useState("viewer");

    // Save to localStorage whenever transactions change
    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    },[transactions]);

    return (
        <FinanceContext.Provider
            value={{ transactions, setTransactions, role, setRole }}
        >
            {children}
        </FinanceContext.Provider>    
    );
};
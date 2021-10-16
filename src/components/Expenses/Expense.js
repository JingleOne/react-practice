import React, { useState } from "react";
import Card from "../UI/Card";
import "./css/Expense.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
    const year = "2021";
    const [filterYear, setFilterYear] = useState(year);


    const selectYearHandler = (yearSelected) => {
        setFilterYear(yearSelected);
    }

    const filteredExpenses = expenses.filter(expense => { return expense.date.getFullYear().toString() === filterYear.toString(); });

    return (
        <Card className="expenses">
            <ExpensesFilter defaultYear={year} onSelectYearHandler={selectYearHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} filterYear={filterYear} />
        </Card>
    );
}

export default Expenses;
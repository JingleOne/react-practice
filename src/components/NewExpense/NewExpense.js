import React from 'react';
import "./NewExpense.css";
import ExpenseFrom from "./ExpenseForm"


const NewExpense = (addExpense) => {
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        addExpense(...enteredExpenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseFrom onSaveExpenseDate = {saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;
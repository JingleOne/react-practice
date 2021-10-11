import "./css/ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from 'react';

const ExpenseItem = ({ date, amount, title }) => {
    const [newTitle, setTitle] = useState(title);
    const click = () => {
        setTitle("Updated!");
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{newTitle}</h2>
                <div className="expense-item__price ">${amount}</div>
            </div>
            <button onClick={click}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
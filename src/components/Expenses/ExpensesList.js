import ExpenseItem from "./ExpenseItem";
import "./css/ExpensesList.css";

const ExpensesList = ({ expenses, filterYear }) => {
    if (expenses.length === 0) {
        return <p className="expenses-list__fallback">No Record Found for {filterYear}</p>;
    }

    return (
        <ul className="expenses-list">
            {expenses
                .map((expense) => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )
                })}
        </ul>
    )
}

export default ExpensesList;
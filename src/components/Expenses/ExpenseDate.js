import "./css/ExpenseDate.css";

const ExpenseDate = ({ date }) => {
    const f_year = date.getFullYear();
    const f_month = date.toLocaleString('en-US', { month: 'long' });
    const f_date = date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className="expense-date">
            <div>{f_month}</div>
            <div >{f_year}</div>
            <div >{f_date}</div>
        </div>
    );
}
//className="expense-date__month"
export default ExpenseDate;
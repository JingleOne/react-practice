
import "./card.css"

const Card = ({ children, className }) => {
    const newClassName = "card " + className
    return (
        <div className={newClassName}>{children}</div>
    );
}

export default Card;
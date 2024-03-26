import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <p className={css.feedback}>Good: {good}</p>
            <p className={css.feedback}>Neutral: {neutral}</p>
            <p className={css.feedback}>Bad: {bad}</p>
            <p className={css.feedback}>Total: {total}</p>
            <p className={css.feedback}>Positive Percentage: {positivePercentage}%</p>
        </>
    )
};
export default Feedback;
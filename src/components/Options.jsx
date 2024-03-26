import css from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    return (
        <>
            <ul className={css.optionsBox}>
            <button className={css.optionsButton} onClick={() => updateFeedback('good')}>Good</button>
            <button className={css.optionsButton} onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className={css.optionsButton} onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback && <button className={css.optionsButton} onClick={resetFeedback}>Reset</button>}
            </ul>
        </>
    )
};
export default Options;
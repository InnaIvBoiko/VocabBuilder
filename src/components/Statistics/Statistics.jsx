import css from './Statistics.module.css';

export default function Statistics() {
    return (
        <p className={css.text}>To study:
            <span className={css.number}>20</span>
        </p>
    );
}
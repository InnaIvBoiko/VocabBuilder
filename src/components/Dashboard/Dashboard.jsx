import { Link } from 'react-router-dom';
import Filters from '../Filters/Filters';
import Statistics from '../Statistics/Statistics';
import css from './Dashboard.module.css';

export default function Dashboard() {
    return (
        <section className={css.wrap}>
            <Filters />
            <div className={css.statisticsWrap}>
                <Statistics />
                <div className={css.addWord}>
                    <button type='button' className={css.addWordBtn}>
                        Add word
                        <span className={css.addIconWrap}>
                            <svg className={css.addIcon} aria-hidden='true'>
                                <use xlinkHref={'/assets/sprite.svg#icon-plus'} />
                            </svg>
                        </span>
                    </button>
                    <Link to='/training' className={css.linkTrain}>
                        Train oneself
                        <span className={css.arrowIconWrap}>
                            <svg className={css.arrowIcon} aria-hidden='true'>
                                <use xlinkHref={'/assets/sprite.svg#icon-arrow-switch'} />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
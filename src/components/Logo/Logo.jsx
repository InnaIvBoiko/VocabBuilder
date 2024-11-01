import { Link } from 'react-router-dom';
import css from './Logo.module.css';

export default function Logo() {
    return (
        <Link to='/'>
            <p className={css.logoText}>
                <span className={css.logoIconWrap}>
                    <svg className={css.logoIcon} aria-hidden='true'>
                        <use xlinkHref={'/assets/sprite.svg#icon-craftwork'} />
                    </svg>
                </span>
                VocabBuilder
            </p>
        </Link>
    );
}
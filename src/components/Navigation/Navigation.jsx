import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Logo from '../Logo/Logo.jsx';
import css from './Navigation.module.css';

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.navItem, isActive && css.active);
};

export default function Navigation() {
    return (
        <header className={css.mainHeader}>
            <Logo />
            <nav className={css.navWrap}>
                <ul className={css.navList}>
                    <li>
                        <NavLink to={'/dictionary'} className={getNavLinkClass}>Dictionary</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/recommend'} className={getNavLinkClass}>Recommend</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/training'} className={getNavLinkClass}>Training</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={css.user}>
                <p className={css.usernameText}>
                    Name
                    <span className={css.userIconWrap}>
                        <svg className={css.userIcon} aria-hidden='true'>
                            <use xlinkHref={'/assets/sprite.svg#icon-user'} />
                        </svg>
                    </span>
                </p>
                <button type='button' className={css.logoutBtn}>
                    Log out
                    <span className={css.logoutBtnIconWrap}>
                        <svg className={css.logoutBtnIcon} aria-hidden='true'>
                            <use xlinkHref={'/assets/sprite.svg#icon-arrow-right'} />
                        </svg>
                    </span>
                </button>
                <button type='button' className={css.menuBtn}>
                    <svg className={css.menuBtnIcon} aria-hidden='true'>
                        <use xlinkHref={'/assets/sprite.svg#icon-nav'} />
                    </svg>
                </button>
            </div>
        </header>
    );
}
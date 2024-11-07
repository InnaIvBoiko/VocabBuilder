import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import Logo from '../Logo/Logo.jsx';
import { toast } from 'react-hot-toast';
import { logOut } from '../../redux/auth/operations.js';   
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
 
import css from './Navigation.module.css';

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.navItem, isActive && css.active);
};

export default function Navigation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector((state) => state.auth);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);
    
    const handleLogout = () => {
        dispatch(logOut())
            .unwrap()
            .then(response => {
                toast.success('LogOut successful!');
            })
            .catch(error => {
                toast.error('Oops, something went wrong. Please try again.');
            });
    };

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
                <button type='button' className={css.logoutBtn} onClick={handleLogout}>
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
            
            {loading && <p>Loading...</p>}
            {error && <p className={css.error}>Error: {error}</p>}

        </header>
    );
}
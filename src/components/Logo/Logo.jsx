// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Logo.module.css';

export default function Logo() {
    // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth < 768);

    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    return (
        <Link to='/'>
            <p className={css.logoText}>
                <span className={css.logoIconWrap}>
                    <svg className={css.logoIcon} aria-hidden='true'>
                        <use xlinkHref={'/src/assets/sprite.svg#icon-craftwork'} />
                        {/* <use xlinkHref={'/src/assets/sprite.svg#icon-logo'} /> */}
                    </svg>
                </span>
                VocabBuilder
            </p>
        </Link>
    );
}
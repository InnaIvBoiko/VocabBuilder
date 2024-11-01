import css from './MainLayout.module.css';

export default function MainLayout() {
    return (
        <main className={css.container}>
            <p className={css.logoText}>
                <span className={css.logoIconWrap}>
                    <svg className={css.logoIcon} aria-hidden='true'>
                        <use xlinkHref={'/assets/sprite.svg#icon-logo'} />
                    </svg>
                </span>
                VocabBuilder
            </p>
        </main>
    );
}
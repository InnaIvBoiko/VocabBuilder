import Logo from '../../components/Logo/Logo.jsx';
import RegisterForm from '../../components/RegisterForm/RegisterForm.jsx';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
    return (
        <>
            <header className={css.logoWrap}>
                <Logo />
            </header>
            <main>
                <section className={css.registerSection}>
                    <div className={css.mainImgWrap}>
                    <div className={css.mainImg}></div>
                    <p className={css.slog}>Word  ·  Translation  ·  Grammar  ·  Progress</p>
                    </div>
                        <RegisterForm />
                </section>
            </main>
        </>
    );
}
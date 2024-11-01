import Logo from '../../components/Logo/Logo.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import css from './LoginPage.module.css';

export default function LoginPage() {
    return (
        <>
            <header className={css.logoWrap}>
                <Logo />
            </header>
            <main>
                <section className={css.loginSection}>
                    <div className={css.mainImgWrap}>
                        <div className={css.mainImg}></div>
                        <p className={css.slog}>Word  ·  Translation  ·  Grammar  ·  Progress</p>
                    </div>
                    <LoginForm />
                </section>
            </main>
        </>
    );
}
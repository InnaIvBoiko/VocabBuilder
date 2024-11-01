import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import css from './LoginForm.module.css';

const loginSchema = yup.object({
    email: yup.string().nullable().email().required().matches(
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
    password: yup.string().required('Please Enter your password').matches(
        /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, 'Error password')
});

export default function LoginForm() {
    const [type, setType] = useState('password');
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log(data);   
    };

    const handleToggle = () => {
        if (type === 'password') {
            setPasswordIsVisible(!passwordIsVisible);
            setType('text');
        } else {
            setPasswordIsVisible(!passwordIsVisible);
            setType('password');
        };
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.formWrap} >
            <h1 className={css.title}>Login</h1>
            <p className={css.text}>Please enter your login details to continue using our service:</p>

            <input {...register('email')} placeholder='Email' className={css.field} />
            <p className={css.errText} >{errors.email?.message}</p>

            <div className={css.passwordWrap}>
                <input {...register('password')} placeholder='Password' className={css.field} type={type} />
                <button type='button' className={css.btnIsVisible} onClick={handleToggle}>
                    {passwordIsVisible ? (
                        <svg className={css.eyeIcon} aria-hidden='true'>
                            <use xlinkHref={'/src/assets/sprite.svg#icon-eye'} />
                        </svg>)
                        : ((
                            <svg className={css.eyeIcon} aria-hidden='true'>
                                <use xlinkHref={'/src/assets/sprite.svg#icon-eye-off'} />
                            </svg>)
                        )
                    }
                </button>
                <p className={css.errText} >{errors.password?.message}</p>
            </div>

            <button type='submit' className={css.registerBtn}>Login</button>
            
            <Link to='/register' className={css.loginLink}>
                Register
            </Link>
        </form>
    );
}
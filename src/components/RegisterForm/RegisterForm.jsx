import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import css from './RegisterForm.module.css';

const registerSchema = yup.object({
    name: yup.string().min(3).max(30).required('This field is required'),
    email: yup.string().nullable().email().required().matches(
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
    password: yup.string().required('Please Enter your password').matches(
        /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, 'Error password')
});

export default function RegisterForm() {
    const [type, setType] = useState('password');
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
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
            <h1 className={css.title}>Register</h1>
            <p className={css.text}>To start using our services, please fill out the registration form below. All fields are mandatory:</p>
           
            <input {...register('name')} placeholder='Name' className={css.field} />
            <p className={css.errText} >{errors.name?.message}</p>

            <input {...register('email')} placeholder='Email' className={css.field} />
            <p className={css.errText} >{errors.email?.message}</p>

            <div className={css.passwordWrap}>
                <input {...register('password')} placeholder='Password' className={css.field} type={type} />
                <button type='button' className={css.btnIsVisible} onClick={handleToggle}>
                    {passwordIsVisible ? (
                        <svg className={css.eyeIcon} aria-hidden='true'>
                            <use xlinkHref={'/assets/sprite.svg#icon-eye'} />
                        </svg>)
                        : ((
                            <svg className={css.eyeIcon} aria-hidden='true'>
                                <use xlinkHref={'/assets/sprite.svg#icon-eye-off'} />
                            </svg>)
                        )
                    }
                </button>
                <p className={css.errText} >{errors.password?.message}</p>
            </div>

            <button type='submit' className={css.registerBtn}>Register</button>
            
            <Link to='/login' className={css.loginLink}>
                Login
            </Link>
        </form>
    );
}
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import { logIn } from '../../redux/auth/operations.js';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import css from './LoginForm.module.css';

const loginSchema = yup.object({
    email: yup.string().nullable().email().required().matches(
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
    password: yup.string().required('Please Enter your password').matches(
        /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, 'Error password')
});

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector((state) => state.auth);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const [type, setType] = useState('password');
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/dictionary');
        }
    }, [isLoggedIn, navigate]);
    
    const onSubmit = (credentials) => {
        dispatch(logIn(credentials))
            .unwrap()
            .then(response => {
                toast.success('Login successful!');
            })
            .catch(error => {
                toast.error('Oops, something went wrong. Please try again.');
            });
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

            <button type='submit' className={css.registerBtn}>Login</button>
            
            <Link to='/register' className={css.loginLink}>
                Register
            </Link>

            {loading && <p>Loading...</p>}
            {error && <p className={css.error}>Error: {error}</p>}

        </form>
    );
}
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import css from './EditWordForm.module.css';

const editSchema = yup.object({
    ua: yup.string().matches(
        /^(?!,[A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/),
    en: yup.string().matches(
        /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/)
});

export default function EditWordForm() {
    const uaId = useId();
    const enId = useId();

    const { register, handleSubmit, formState: { errors } } = useForm({
          resolver: yupResolver(editSchema),
      });
    const onSubmit = data => console.log(data);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor={uaId} className={css.uaLabel}>
                <span className={css.uaIconWrap}>
                    <svg className={css.uaIcon} aria-hidden='true'>
                        <use xlinkHref={'/assets/sprite.svg#icon-ukraine'} />
                    </svg>
                </span>
                Ukrainian
            </label>
            <input {...register('ua')} className={css.field} id={uaId} />
            <p className={css.errText} >{errors.ua?.message}</p>

            <label htmlFor={enId} className={css.enLabel}>
                <span className={css.ukIconWrap}>
                    <svg className={css.ukIcon} aria-hidden='true'>
                        <use xlinkHref={'/assets/sprite.svg#icon-united-kingdom'} />
                    </svg>
                </span>
                English
            </label>
            <input {...register('en')} className={css.field} id={enId} />
            <p className={css.errText} >{errors.en?.message}</p>

            <div className={css.buttonsWrap}>
                <button type='submit' className={css.submitBtn}>Save</button>
                <button type='button' className={css.cancelBtn}>Cancel</button>
            </div>
        </form>
    );
}
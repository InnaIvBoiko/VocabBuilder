import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import css from './AddWordForm.module.css';

const addSchema = yup.object({
    ua: yup.string().matches(
        /^(?!,[A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/),
    en: yup.string().matches(
        /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/)
});

export default function AddWordForm() {
    const uaAddId = useId();
    const enAddId = useId();
    const categoryAddId = useId();
    const isIrregularTrue = useId();
    const isIrregularFalse = useId();

    const [isActive, setIsActive] = useState(false);
    const [isVerb, setIsVerb] = useState(false);
    const [isIrregularActive, setIsIrregularActive] = useState(false);

    const handleSelect = (e) => {
        setIsActive(true);
        console.log(e.target.value);
        setIsActive(false);
        if (e.target.value === 'verb') {
            setIsVerb(true);
        } else {
            setIsVerb(false);
        };
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
          resolver: yupResolver(addSchema),
      });
    const onSubmit = data => console.log(data);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className={css.title}>Add word</h2>
            <p className={css.text}>
                Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary.
            </p>

            <div className={css.categoriesWrap}>
                <label htmlFor={categoryAddId} className={css.categoryWrap}>
                    <select
                        {...register('category')} 
                        className={css.categoryField}
                        id={categoryAddId}
                        aria-placeholder='Categories'
                        onChange={handleSelect}
                        defaultValue=''
                    >
                        <option value='' disabled hidden>Categories</option>
                        <option value='verb'>Verb</option>
                        <option value='participle'>Participle</option>
                        <option value='noun'>Noun</option>
                        <option value='adjective'>Adjective</option>
                        <option value='pronoun'>Pronoun</option>
                        <option value='numerals'>Numerals</option>
                        <option value='adverb'>Adverb</option>
                        <option value='preposition'>Preposition</option>
                        <option value='conjuction'>Conjuction</option>
                        <option value='phrasalVerb'>Phrasal verb</option>
                        <option value='functionalPhrase'>Functional phrase</option>
                    </select>
                    <button type='button' className={css.categoryIconWrap}>
                        {isActive ? (
                            <svg className={css.categoryIconRotate} aria-hidden='true'>
                                <use xlinkHref={'../../../public/assets/sprite.svg#icon-ep_arrow-down'} />
                            </svg>) :
                            (<svg className={css.categoryIcon} aria-hidden='true'>
                                <use xlinkHref={'../../../public/assets/sprite.svg#icon-ep_arrow-down'} />
                            </svg>)}
                    </button>
                </label>
                
                {isVerb && (<div className={css.radioWrap}>
                    <label htmlFor={isIrregularFalse} className={css.isIrregularWrap}>
                        <input {...register('isIrregular')}  type='radio' value={false} id={isIrregularFalse}/>
                        {!isIrregularActive ? (
                            <button type='button' className={css.radioBthWrapActive}>
                                <span className={css.radioBtnIconWrap} >
                                    <svg  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect x="1" y="1" width="18" height="18" rx="9" stroke="#FCFCFC" strokeWidth="2" />
                                      <rect x="5" y="5" width="10" height="10" rx="5" fill="#FCFCFC" />
                                    </svg>
                                </span>
                                Regular
                            </button>
                        ) : (
                            <button type='button' className={css.radioBthWrapActive} onClick={() => setIsIrregularActive(!isIrregularActive)}>
                                <span className={css.activeRadioBth}></span>
                                Regular
                            </button>
                        )}
                    </label>
                    <label htmlFor={isIrregularTrue} className={css.isIrregularWrap}>
                        <input {...register('isIrregular')}  type='radio' value={true} id={isIrregularTrue}/>
                        {!isIrregularActive ? (
                            <button type='button' className={css.radioBthWrapActive} onClick={() => setIsIrregularActive(!isIrregularActive)}>
                                <span className={css.activeRadioBth}></span>
                                Irregular
                            </button>
                        ) : (
                            <button type='button' className={css.radioBthWrapActive} >
                                <span className={css.radioBtnIconWrap} >
                                    <svg  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect x="1" y="1" width="18" height="18" rx="9" stroke="#FCFCFC" strokeWidth="2" />
                                      <rect x="5" y="5" width="10" height="10" rx="5" fill="#FCFCFC" />
                                    </svg>
                                </span>
                                Irregular
                            </button>
                        )}
                    </label>
                </div>)}
            </div>

            <label htmlFor={uaAddId} className={css.uaLabel}>
                <span className={css.uaIconWrap}>
                    <svg className={css.uaIcon} aria-hidden='true'>
                        <use xlinkHref={'/assets/sprite.svg#icon-ukraine'} />
                    </svg>
                </span>
                Ukrainian
            </label>
            <input {...register('ua')} className={css.field} id={uaAddId} />
            <p className={css.errText} >{errors.ua?.message}</p>

            <label htmlFor={enAddId} className={css.enLabel}>
                <span className={css.ukIconWrap}>
                    <svg className={css.ukIcon} aria-hidden='true'>
                        <use xlinkHref={'/assets/sprite.svg#icon-united-kingdom'} />
                    </svg>
                </span>
                English
            </label>
            <input {...register('en')} className={css.field} id={enAddId} />
            <p className={css.errText} >{errors.en?.message}</p>

            <div className={css.buttonsWrap}>
                <button type='submit' className={css.submitBtn}>Save</button>
                <button type='button' className={css.cancelBtn}>Cancel</button>
            </div>
        </form>
    );
}
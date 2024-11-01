import { useId, useState } from 'react';
import css from './Filters.module.css';

export default function Filters() {
    const categoryId = useId();
    const filterId = useId();
    const [isActive, setIsActive] = useState(false);

    const handleSelect = (e) => {
        setIsActive(true);
        console.log(e.target.value);
        setIsActive(false);
    }

    return (
        <div className={css.filtersWrap}>
            <label htmlFor={filterId} className={css.inputWrap}>
                <input
                    className={css.filterField}
                    type='text'
                    name='filter'
                    id={filterId}
                    placeholder='Find the word'
                />
                <span className={css.filterIconWrap}>
                    <svg className={css.filterIcon} aria-hidden='true'>
                        <use xlinkHref={'/assets/sprite.svg#icon-search'} />
                    </svg>
                </span>
            </label>
            <label htmlFor={categoryId} className={css.categoryWrap}>
                <select
                    className={css.categoryField}
                    name='category'
                    id={categoryId}
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
        </div>
    );
}
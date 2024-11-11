import { useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { categoriesList } from '../../redux/categories/operations.js';
import { selectCategories } from '../../redux/categories/selectors.js';
import css from './Filters.module.css';

export default function Filters() {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);

    const categoryId = useId();
    const filterId = useId();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        dispatch(categoriesList());
    }, [dispatch]);

    const handleSelect = (e) => {
        setIsActive(true);
        console.log(e.target.value);
        setIsActive(false);
    };

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
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
                    ))}
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
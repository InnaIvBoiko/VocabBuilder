import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allWords } from '../../redux/words/operations';
import { selectAllWords } from '../../redux/words/selectors.js';
import css from './WordsTable.module.css';

export default function WordsTable() {
    const dispatch = useDispatch();
    const words = useSelector(selectAllWords);

    useEffect(() => {
        dispatch(allWords());
    }, [dispatch]);

    console.log(words)
    return (
        <table className={css.customTable}>
            <thead>
                <tr className={css.header}>
                    <th className={css.en}>Word
                        <span className={css.ukIconWrap}>
                            <svg className={css.ukIcon} aria-hidden='true'>
                                <use xlinkHref={'/assets/sprite.svg#icon-united-kingdom'} />
                            </svg>
                        </span>
                    </th>
                    <th className={css.ua}>Translation
                        <span className={css.uaIconWrap}>
                            <svg className={css.uaIcon} aria-hidden='true'>
                                <use xlinkHref={'/assets/sprite.svg#icon-ukraine'} />
                            </svg>
                        </span>
                    </th>
                    <th>Category</th>
                    <th>Progress</th>
                    <th></th>
                </tr>
            </thead>
            
            <tbody>
                 {words.items.map((item) => (
                <tr key={item.id} className={css.row}>
                    <td className={css.item}>{item.en}</td>
                    <td className={css.item}>{item.ua}</td>
                    <td className={css.item}>{item.category}</td>
                    <td className={css.item}>
                    50%
                    </td>
                    <td className={css.item}>
                        <button type='button' className={css.editMenuBtn}>...</button>
                    </td>
                </tr>
              ))}
            </tbody> 

        </table>
    );
}

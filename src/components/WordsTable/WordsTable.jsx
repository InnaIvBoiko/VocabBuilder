import css from './WordsTable.module.css';

export default function WordsTable() {
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
            {/* 
            <tbody>
                 {data.map((item) => (
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
            </tbody>  */}
           
            <tr className={css.row}>
                <td className={css.item}>A little bit</td>
                <td className={css.item}>Трохи, трішки</td>
                <td className={css.item}>Phrasal verb</td>
                <td className={css.item}>50%</td>
                <td className={css.item}>...</td>
            </tr>
            <tr className={css.row}>
                <td>A little bit</td>
                <td>Трохи, трішки</td>
                <td>Phrasal verb</td>
                <td>50%</td>
                <td>...</td>
            </tr>
            <tr className={css.row}>
                <td>A little bit</td>
                <td>Трохи, трішки</td>
                <td>Phrasal verb</td>
                <td>50%</td>
                <td>...</td>
            </tr>
            <tr className={css.row}>
                <td>A little bit</td>
                <td>Трохи, трішки</td>
                <td>Phrasal verb</td>
                <td>50%</td>
                <td>...</td>
            </tr>
            <tr className={css.row}>
                <td>A little bit</td>
                <td>Трохи, трішки</td>
                <td>Phrasal verb</td>
                <td>50%</td>
                <td>...</td>
            </tr>
            <tr className={css.row}>
                <td>A little bit</td>
                <td>Трохи, трішки</td>
                <td>Phrasal verb</td>
                <td>50%</td>
                <td>...</td>
            </tr>
            <tr className={css.row}>
                <td>A little bit</td>
                <td>Трохи, трішки</td>
                <td>Phrasal verb</td>
                <td>50%</td>
                <td>...</td>
            </tr>
        </table>
    );
}

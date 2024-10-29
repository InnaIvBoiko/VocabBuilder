import { Suspense } from 'react';
import { RotateSpinner } from 'react-spinners-kit';
import css from './Layout.module.css';

export default function Layout({children = null}) {
    return (
        <div className={css.container}>
            <Suspense fallback={<div className={css.spinner}>
                <RotateSpinner size={120} color='#85aa9f' />
            </div>} >
                {children}
            </Suspense>
        </div>
    );
}
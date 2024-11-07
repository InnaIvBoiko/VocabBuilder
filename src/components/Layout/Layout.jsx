import { Suspense } from 'react';
import { RotateSpinner } from 'react-spinners-kit';
import { Toaster } from 'react-hot-toast';
import css from './Layout.module.css';

export default function Layout({children = null}) {
    return (
        <div className={css.container}>
            <Toaster position="top-right" reverseOrder={false} />
            <Suspense fallback={<div className={css.spinner}>
                <RotateSpinner size={120} color='var(--green)' />
            </div>} >
                {children}
            </Suspense>
        </div>
    );
}
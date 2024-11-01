import Navigation from '../../components/Navigation/Navigation.jsx';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import WordsTable from '../../components/WordsTable/WordsTable.jsx';
import WordsPagination from '../../components/WordsPagination/WordsPagination.jsx';
import css from './DictionaryPage.module.css';

export default function DictionaryPage() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main className={css.container}>
            
                <Dashboard />

                <WordsTable />

                <WordsPagination />
            </main>
        </>


    );
}
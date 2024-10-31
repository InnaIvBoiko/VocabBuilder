import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import Layout from '../Layout/Layout.jsx';

const MainLayout = lazy(() => import('../../pages/MainLayout/MainLayout.jsx'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage.jsx'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));
const DictionaryPage = lazy(() => import('../../pages/DictionaryPage/DictionaryPage.jsx'));
const RecommendPage = lazy(() => import('../../pages/RecommendPage/RecommendPage.jsx'));
const TrainingPage = lazy(() => import('../../pages/TrainingPage/TrainingPage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));

export default function App() {
  return (
    <>
      <Navigation />
      <Layout>
        <Routes>
          <Route path='/' element={<MainLayout />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dictionary' element={<DictionaryPage />} />
          <Route path='/recommend' element={<RecommendPage />} />
          <Route path='/training' element={<TrainingPage />} />
              
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}
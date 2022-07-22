import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
const CastList = lazy(() => import('./CastList/CastList'));
const ReviwersList = lazy(() => import('./ReviwersList/ReviwersList'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

// import Home from 'pages/Home';
// import MovieDetails from 'pages/MovieDetails';
// import Movies from 'pages/Movies';
// import NotFoundPage from 'pages/NotFoundPage';

// import CastList from './CastList/CastList';
// import ReviwersList from './ReviwersList/ReviwersList';
// import SharedLayout from './SharedLayout/SharedLayout';

const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movies />} />

          <Route path="movie/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastList />} />
            <Route path="reviwers" element={<ReviwersList />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Route>

      </Routes>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </>
  );
};

export default App;

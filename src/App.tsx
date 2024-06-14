import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import SearchPage from './pages/SearchPage/SearchPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { setedUser } from './store/slices/authSlice';
import { ICoord } from './types/weatherApi';
import { setedCoords } from './store/slices/weatherSlice';
import Modal from './components/Modal/Modal';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const email = sessionStorage.getItem('email');
    if(email) dispatch(setedUser(email));
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const coords: ICoord = {
        lat: lat,
        lon: lon,
      };
      
      dispatch(setedCoords(coords));
    });
  }, [dispatch]);

  return (
    <>
      <div id='app'>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={'/search'} element={<SearchPage />} />
            <Route path={'/auth'} element={<LoginPage />} />
          </Route>
        </Routes>
      </div>
      <Modal />
    </>
  );
}

export default App;

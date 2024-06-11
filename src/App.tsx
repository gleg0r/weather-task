import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <div id='app'>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App;

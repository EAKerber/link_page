import { createBrowserRouter } from 'react-router-dom';
import Adm from './pages/Adm/index';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Page404 from './pages/Page404/index';
import Private from './routes/private';

const router = createBrowserRouter([
  {
    path: '/adm',
    element: <Private><Adm/></Private>,
  },
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '*',
    element: <Page404/>,
  },  
]);

export {router};
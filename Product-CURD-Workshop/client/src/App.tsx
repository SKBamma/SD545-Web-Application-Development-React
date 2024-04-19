import { NavLink, Navigate, Route, Routes, useRoutes } from 'react-router-dom';

import logo from './images/product.jpg';
import FrameworksList from './pages/Frameworks/frameworks.pages';
import AddFrameworks from './pages/AddFramework/frameworks.add';
import PageNotFound from './pages/PageNotFound.page';
import './App.css';
import routes from './Routes/routes';

function App() {

  const element = useRoutes(routes);
  return (
    <div className='container'>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            </NavLink>
            <img src={logo} alt='Programming languages' style={{ width: "74px" }} />
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink to="/frameworks" className="nav-link px-2 text-white">Frameworks</NavLink></li>
              <li><NavLink to="/add" className="nav-link px-2 text-white">Add</NavLink></li>
            </ul>
          </div>
        </div>
      </header>

      {/* <FrameworksList /> */}
      {/* <Routes>
        <Route path='/frameworks' element={<FrameworksList />}></Route>
        <Route path='/add' element={<AddFrameworks />}></Route>
        <Route path='/' element={<Navigate to='/frameworks' />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes> */}
      {element}
    </div>
  );
}

export default App;

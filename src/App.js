import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navigationFolder/NavBar';
import Home from './home/Home';
import About from './aboutFolder/About';
import Menu from './menuFolder/Menu';
import Contact from './contact/Contact';
import Footer from './navigationFolder/Footer';
import Cart from './cart/Cart';
import BookTable from './home/BookTable';
import DashBoard from './dashBoard/DashBoard';
import ManagerDashboard from './managerDashboard/ManagerDashboard';
import SignUp from './formFolder/SignUp';
import SignIn from './formFolder/SignIn';
import Service from './serviceFolder/Service';
import OurEvents from './eventFolder/OurEvents';
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/menu' Component={Menu}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/cart' Component={Cart}/>
          <Route path='/book_a_table' Component={BookTable}/>
          <Route path='/dashboard' Component={DashBoard}/>
          <Route path='/manager_dashboard' Component={ManagerDashboard}/>
          <Route path='/sign_up' Component={SignUp}/>
          <Route path='/sign_in' Component={SignIn}/>
          <Route path='/events' Component={OurEvents}/>
          <Route path='/service' Component={Service}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

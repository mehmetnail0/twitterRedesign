import './App.css';
import React  from 'react';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import LeftSection from './components/LeftSection/LeftSection';
import MiddleSection from './components/MiddleSection/MiddleSection';
import RightSection from './components/RightSection/RightSection';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";



function App() {
  return (
    <>
  <Navbar/>
  <Routes>
<Route path='/login' element={<LoginPage />} />
<Route path='/register' element={<RegisterPage />} />
</Routes>
  
  <div className="sectionContainer">
  <LeftSection/>
  <MiddleSection/>
  <RightSection/>

  </div>

    </>

);
}

export default App;

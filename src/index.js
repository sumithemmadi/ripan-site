import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//user
import Userlogin from './pages/user/Userlogin';
import Usersignup from './pages/user/Usersignup';

//admin
import Adminlogin from './pages/admin/Adminlogin';
import Admindashboard from './pages/admin/Admindashboard';

// user 
import About from './pages/more/About';
import Contact from './pages/more/Contact';
import Courses from './pages/more/Courses';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Userlogin />,
  },
  {
    path: "/signup",
    element: <Usersignup />,
  },
  {
    path: "/admin/login",
    element: <Adminlogin />,
  },
  {
    path: "/admin/dashboard",
    element: <Admindashboard />,
  },

  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();

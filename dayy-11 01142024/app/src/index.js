import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home_page';
import AboutPage from './pages/about_page';
import NotFoundPage from './pages/not_found_page';
import UserPage from './pages/user_page';
import UsersListPage from './pages/users_list_page';



const root = ReactDOM.createRoot(document.getElementById('root'));



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/users",
    element: <UsersListPage/>,
  },

  
  {
    path: "/user/details/:id",
    element: <UserPage/>,
  },
  
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

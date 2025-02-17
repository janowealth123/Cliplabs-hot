import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlowLanding from './GlowLanding';
import WebinarPage from './webinar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <WebinarPage/>,
  },
  {
    path:"/blank",
    element:<GlowLanding />
  }
]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

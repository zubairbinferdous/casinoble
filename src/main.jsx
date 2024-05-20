import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import BestCasino from './component/BestCasino.jsx';
import BestPayout from './component/BestPayout.jsx';
import HomePage from './component/HomePage.jsx';
import MobileCasino from './component/MobileCasino.jsx';
import NewCasino from './component/NewCasino.jsx';
import './index.css';

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[ 
    
    {
      path:'/',
      element:<HomePage></HomePage>
    }, 
    {
      path:'/Mobile',
      element:<MobileCasino></MobileCasino>
    },
    {
      path:'/NewCasino',
      element:<NewCasino></NewCasino>
    },
    {
      path:'/BestOnline',
      element:<BestCasino></BestCasino>
    },
    {
      path:'/BestPayout',
      element:<BestPayout></BestPayout>
    }
  ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

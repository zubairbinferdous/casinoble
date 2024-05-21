import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Baccarat from './component/Baccarat.jsx';
import BestCasino from './component/BestCasino.jsx';
import BestPayout from './component/BestPayout.jsx';
import Esport from './component/Esport.jsx';
import FreeSport from './component/FreeSport.jsx';
import Goole from './component/Goole.jsx';
import HomePage from './component/HomePage.jsx';
import MobileCasino from './component/MobileCasino.jsx';
import NewCasino from './component/NewCasino.jsx';
import Sports from './component/Sports.jsx';
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
    },


    {
      path:'/Sports',
      element:<Sports></Sports>
    },
    {
      path:'/eSports',
      element:<Esport></Esport>
    },

    {
      path:'/FreeSports',
      element:<FreeSport></FreeSport>
    },


    {
      path:'/baccarat',
      element:<Baccarat></Baccarat>
    },
    {
      path:'/eSports',
      element:<Esport></Esport>
    },

    {
      path:'/FreeSports',
      element:<FreeSport></FreeSport>
    },




  ]
  },
  {
    path:'/googlePay',
    element:<Goole></Goole>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

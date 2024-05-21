import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Apply from './component/Apply.jsx';
import Baccarat from './component/Baccarat.jsx';
import BestCasino from './component/BestCasino.jsx';
import BestPayout from './component/BestPayout.jsx';
import BlackJack from './component/BlackJack.jsx';
import Cashback from './component/Cashback.jsx';
import Esport from './component/Esport.jsx';
import Free from './component/Free.jsx';
import FreeSport from './component/FreeSport.jsx';
import Google from './component/Google.jsx';
import Goole from './component/Goole.jsx';
import HomePage from './component/HomePage.jsx';
import Interac from './component/Interac.jsx';
import Master from './component/Master.jsx';
import MobileCasino from './component/MobileCasino.jsx';
import NewCasino from './component/NewCasino.jsx';
import Slots from './component/Slots.jsx';
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
      path:'/Baccarat',
      element:<Baccarat></Baccarat>
    },
    {
      path:'/BlackJack',
      element:<BlackJack></BlackJack>
    },

    {
      path:'/Slots',
      element:<Slots></Slots>
    },


    {
      path:'/Interac',
      element:<Interac></Interac>
    },
    {
      path:'/ApplyPay',
      element:<Apply></Apply>
    },

    {
      path:'/GooglePay',
      element:<Google></Google>
    },
    {
      path:'/Mastercard',
      element:<Master></Master>
    },


    {
      path:'/Cashback',
      element:<Cashback></Cashback>
    },
    {
      path:'/FreeSpins',
      element:<Free></Free>
    },

    {
      path:'/NoDeposit',
      element:<Google></Google>
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

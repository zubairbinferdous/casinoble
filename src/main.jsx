import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Apply from './component/Apply.jsx';
import Baccarat from './component/Baccarat.jsx';
import BestCasino from './component/BestCasino.jsx';
import BestPayout from './component/BestPayout.jsx';
import Betbest from './component/Betbest.jsx';
import Betchain from './component/Betchain.jsx';
import Betpaly from './component/Betpaly.jsx';
import Bettw from './component/Bettw.jsx';
import BlackJack from './component/BlackJack.jsx';
import Cashback from './component/Cashback.jsx';
import Esport from './component/Esport.jsx';
import Free from './component/Free.jsx';
import FreeSport from './component/FreeSport.jsx';
import Ggbet from './component/Ggbet.jsx';
import Google from './component/Google.jsx';
import Grand from './component/Grand.jsx';
import HomePage from './component/HomePage.jsx';
import Hotbet from './component/Hotbet.jsx';
import Interac from './component/Interac.jsx';
import Lucky from './component/Lucky.jsx';
import Master from './component/Master.jsx';
import MobileCasino from './component/MobileCasino.jsx';
import NewCasino from './component/NewCasino.jsx';
import NoDeposit from './component/NoDeposit.jsx';
import OneX from './component/OneX.jsx';
import Playzilla from './component/Playzilla.jsx';
import Roll from './component/Roll.jsx';
import Rplay from './component/Rplay.jsx';
import Run4Win from './component/Run4Win.jsx';
import Slots from './component/Slots.jsx';
import Spinarium from './component/Spinarium.jsx';
import Sports from './component/Sports.jsx';
import TFSlots from './component/TFSlots.jsx';
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
      path:'/Free',
      element:<Free></Free>
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
      element:<NoDeposit></NoDeposit>
    },

  ]
  },
  
  {
    path:'/Rplay',
    element:<Rplay></Rplay>
  },
  {
    path:'/Roll',
    element:<Roll></Roll>
  },
  {
    path:'/Grand',
    element:<Grand></Grand>
  },
  {
    path:'/OneX',
    element:<OneX></OneX>
  },
  {
    path:'/bett',
    element:<Bettw></Bettw>
  },
  {
    path:'/Playzilla',
    element:<Playzilla></Playzilla>
  },
  {
    path:'/Ggbet',
    element:<Ggbet></Ggbet>
  },
  {
    path:'/Lucky',
    element:<Lucky></Lucky>
  },
  {
    path:'/Betbest',
    element:<Betbest></Betbest>
  },
  {
    path:'/Betplay',
    element:<Betpaly></Betpaly>
  },
  {
    path:'/Hotbet',
    element:<Hotbet></Hotbet>
  },
  {
    path:'/Spinarium',
    element:<Spinarium></Spinarium>
  },
  {
    path:'/Betchain',
    element:<Betchain></Betchain>
  },
  {
    path:'/Run4Win',
    element:<Run4Win></Run4Win>
  },
  {
    path:'/24Slots',
    element:<TFSlots></TFSlots>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

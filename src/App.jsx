/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

function App() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    {/* <HomePage></HomePage> */}
    <Footer></Footer>
    </>
  )
}

export default App

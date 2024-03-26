import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Search from './components/Search';
import OrderTable from './components/OrderTable';

function App() {
  return (
    <>
    <Header />
    <Search />
    <OrderTable />
    </>
  );
}

export default App;

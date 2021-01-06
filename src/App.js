import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridProdutos from './components/gridprodutos/gridprodutos'

function App() {
  return (
    <div className="App">
      <div className='ContainerGrid'>
        <GridProdutos />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import ComponentFiltros from './components/ComponentFiltros/ComponentFiltros';
import GridProdutos from './components/gridprodutos/gridprodutos'

class App extends React.Component {

  state={
    valorMinimo: '',
    valorMaximo: '',
    filtraNome: ''
  }

  render(){
        return (
      <div className="ContainerFlex">
        <div>
          <ComponentFiltros 
            
          />
        </div>
        <div className='ContainerGrid'>
          <GridProdutos />
        </div>
        <div>Area Carrinho</div>
      </div>
    );
  }
}

export default App;

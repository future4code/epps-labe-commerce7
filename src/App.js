import React from 'react';
import './App.css';

import listaProdutos from './db/dbProdutos'

import ComponentFiltros from './components/ComponentFiltros/ComponentFiltros';
import GridProdutos from './components/gridprodutos/gridprodutos'

class App extends React.Component {

  state = {
    produtos: [listaProdutos],
    valorMinimo: 0,
    valorMaximo: 30000,
    filtraNome: ''
  }

  onChangeMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }

  onChangeMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  render() {


    const listaFiltradaInicial = this.state.produtos.filter((item) =>
      this.state.valorMinimo > 0 ? (item.precoProduto > this.state.valorMinimo) : true)


    console.log(listaFiltradaInicial)

    return (
      <div className="ContainerFlex">
        <div>
          <ComponentFiltros
            inputMinimo={this.state.valorMinimo} atualizaValorMinimo={this.onChangeMinimo}
            inputMaximo={this.state.valorMaximo} atualizaValorMaximo={this.onChangeMaximo}
            inputNome={this.state.filtraNome}
          />
        </div>
        <div className='ContainerGrid'>

          <GridProdutos

          />
        </div>
        <div>Area Carrinho</div>
      </div>
    );
  }
}

export default App;

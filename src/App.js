import React from 'react';
import './App.css';
import ComponentFiltros from './components/ComponentFiltros/ComponentFiltros';
import GridProdutos from './components/gridprodutos/gridprodutos'

class App extends React.Component {

  state = {
    valorMinimo: '',
    valorMaximo: '',
    filtraNome: ''
  }

  onChangeMinimo = (event) => {
    console.log(event.target.value)
    this.setState({ valorMinimo: event.target.value })
  }

  onChangeMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  render() {
    
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
          {/* <GridProdutos /> */}
        </div>
        {/* <div>Area Carrinho</div> */}
      </div>
    );
  }
}

export default App;

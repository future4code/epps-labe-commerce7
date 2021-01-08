import React from 'react';
import {Filtro} from './components/Filtro/Filtro';
import {Produtos} from './components/Produtos/Produtos';
import {Carrinho} from './components/Carrinho/Carrinho';
import styled from 'styled-components';
import condicionador from './img.jpg';


const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  padding:10px;
  gap:4px;
  `;

  const produtos = [
    {
      id: 1,
      nome: 'Produto 1',
      preco: 100,
      foto: ''
    },
    {
      id: 2,
      nome: 'Produto 2',
      preco: 200,
      foto: ''
    },
    {
      id: 3,
      nome: 'Produto 3',
      preco: 300,
      foto: ''
    },
    {
      id: 4,
      nome: 'Produto 4',
      preco: 400,
      foto: ''
    },
    {
      id: 5,
      nome: 'Produto 5',
      preco: 500,
      foto: ''
    },
    {
      id: 6,
      nome: 'Produto 6',
      preco: 600,
      foto: ''
    }
]

class App extends React.Component {
  state = {
    filtroMin:"10",
    filtroMax: "1000",
    filtroNome:'',
      produtosCarrinho: [] 
  }

  onChangeFiltroMin = (event) => {
    this.setState({filtroMin: event.target.value})
  }

  onChangeFiltroMax = (event) => {
    this.setState({filtroMax: event.target.value})
  }

  onChangeFiltroNome = (event) => {
    this.setState({filtroNome: event.target.value})
  }

  onAddProdutoCarrinho = (produtosId) =>{
    const prodCarrinho = this.state.produtosCarrinho.find(produtos => produtosId === produtos.id)

    if(prodCarrinho){
      const newProdtsCarrrinho = this.state.produtosCarrinho.map(produtos =>{
        if(produtosId === produtos.id){
          return{
            ...produtos,
            qtd: produtos.qtd + 1
          }
        }
        return produtos
      }) 
      this.setState({produtosCarrinho: newProdtsCarrrinho})
    } else{
      const produtoAdd = produtos.find(produtos => produtosId === produtos.id)

      const newProdtsCarrrinho = [...this.state.produtosCarrinho,{...produtoAdd, qtd: 1}]

      this.setState({produtosCarrinho: newProdtsCarrrinho})
    }

  }

  onRemoverProdutoCarrinho = (produtosId) =>{
    const newProdtsCarrrinho = this.state.produtosCarrinho.map((produtos) =>{
      if(produtos.id === produtosId){
        return{
          ...produtos,
          qtd: produtos.qtd - 1
        }
      }
      return produtos
    }).filter((produtos) => produtos.qtd > 0)

    this.setState({produtosCarrinho: newProdtsCarrrinho})

  }

  render(){
  return (
     <AppContainer>
      <Filtro
      min={this.state.filtroMin}
      max={this.state.filtroMax}
      nome={this.state.filtroNome}
      onChangeFiltroMin={this.onChangeFiltroMin}
      onChangeFiltroMax={this.onChangeFiltroMax}
      onChangeFiltroNome={this.onChangeFiltroNome}
      />
      <Produtos 
      produtos={produtos}
      min={this.state.filtroMin}
      max={this.state.filtroMax}
      nome={this.state.filtroNome}
      onAddProdutoCarrinho={this.onAddProdutoCarrinho}
      />
      <Carrinho
      carrinho={this.state.produtosCarrinho}
      onRemoverProdutoCarrinho={this.onRemoverProdutoCarrinho}
      />
    </AppContainer>
  );
 }
}

export default App;
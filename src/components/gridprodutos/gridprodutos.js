import React from 'react'
import styled from 'styled-components'
import Produto from '../produto/produto'
import listaProdutos from '../../db/dbProdutos'

const GridMain = styled.div`
  display: flex;
  flex-wrap: wrap;
justify-content: space-between; 

`
const QtdProdutos = styled.p`
  font-size: 1.3rem;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 
'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 10px 10px 0px 10px;
`
const CbxProdutos = styled.select`
font-size: 1.3rem;
margin: 10px 10px 0px 10px;
`
const DivHeader = styled.div`
display: flex;
justify-content: space-between; 
`

export default class GridProdutos extends React.Component {
  state = {
    ordenacaoItens: 'Decrescente'
  }

  adicionarCarrinho = (pdt) => {
    pdt.carrinho = !pdt.carrinho;
    console.log(pdt);
  }

  produtosRenderizados = () => {
    if (this.state.ordenacaoItens === 'Decrescente') {
      return (
        listaProdutos.sort(function (a, b) {
          return b.precoProduto - a.precoProduto;
        }).map(pdt => {
          return (<Produto
            idProduto={pdt.idProduto}
            nomeProduto={pdt.nomeProduto}
            precoProduto={pdt.precoProduto.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
            imagemProduto={pdt.imagemProduto}
            adicionarCarrinho={() => this.adicionarCarrinho(pdt)}
            carrinho={pdt.carrinho}
          />)
        })
      )
    } else {
      return (
        listaProdutos.sort(function (a, b) {
          return a.precoProduto - b.precoProduto;
        }).map(pdt => {
          return (<Produto
            idProduto={pdt.idProduto}
            nomeProduto={pdt.nomeProduto}
            precoProduto={pdt.precoProduto.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
            imagemProduto={pdt.imagemProduto}
            adicionarCarrinho={() => this.adicionarCarrinho(pdt)}
            carrinho={pdt.carrinho}
          />)
        })
      )
    }
  }

  CbxProdutosOnChange = (e) => {
    this.setState({ ordenacaoItens: e.target.value })
  }

  render() {
    return (
      <div >
        <DivHeader>
          <QtdProdutos>Quantidade de produtos: {listaProdutos.length}</QtdProdutos>
          <CbxProdutos onChange={this.CbxProdutosOnChange}>
            <option value="Decrescente">Decrescente </option>
            <option value="Crescente">Crescente</option>
          </CbxProdutos>
        </DivHeader>
        <GridMain>
          {this.produtosRenderizados()}
        </GridMain>
      </div>
    )
  }
}
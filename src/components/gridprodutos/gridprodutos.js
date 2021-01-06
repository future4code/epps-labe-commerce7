import React from 'react'
import styled from 'styled-components'
import Produto from '../produto/produto'
import listaProdutos from '../../db/dbProdutos'

const GridMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  /* background-color: #0f4c75; */
`

export default class GridProdutos extends React.Component {
  produtosRenderizados = listaProdutos.map(pdt => {
    return (<Produto idProduto={pdt.idProduto} nomeProduto={pdt.nomeProduto} 
      precoProduto={pdt.precoProduto.toLocaleString('pt-br',{minimumFractionDigits: 2})} imagemProduto={pdt.imagemProduto}/>)
  })

  render() {
    return (
      <GridMain>
        {this.produtosRenderizados}
      </GridMain>
    )
  }
}
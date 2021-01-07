import React from 'react'
import styled from 'styled-components'

const DivContainer = styled.div`
display: flex;
position: relative;
flex-direction: column;
border: 1px solid black;
height: 460px;
width: 320px;
padding: 5px;
margin: 10px;
`
const DivImg = styled.div`
width: 320px;
height: 300px;
`
const ImgProduto = styled.img`
width: 100%;
height: 100%;
`
const NomeProduto = styled.p`
font-size: 1.9rem;
margin: 10px 5px;
font-weight: bold;
text-align: center;
`
const PrecoProduto = styled.p`
font-size: 1.9rem;
margin: 5px;
text-align: center;
color: orange;
font-weight: 900;
`

const BotaoAdicionar = styled.button`
width: 320px;
height: 50px;
background-color: #3282b8;
color: white;
font-size: 1.4rem;
position: absolute;
bottom: 5px;
`


export default class Produto extends React.Component {
  render() {
    return (
      <DivContainer>
        <DivImg>
          <ImgProduto src={this.props.imagemProduto} />
        </DivImg>
        <NomeProduto>{this.props.nomeProduto}</NomeProduto>
        <PrecoProduto>R$ {this.props.precoProduto}</PrecoProduto>
        <BotaoAdicionar onClick={this.props.adicionarCarrinho}>
          {this.props.carrinho ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
          </BotaoAdicionar>
      </DivContainer>
    )
  }
}
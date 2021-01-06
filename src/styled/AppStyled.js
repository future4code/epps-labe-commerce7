import styled from 'styled-components'

export const LayoutMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;    

`

export const Header = styled.div`
  width: 100%;
  height: 50px;

`

export const MainCommerce = styled.div`
    flex-grow: 1;
    display: flex;

`

export const MenuFiltros = styled.div`
    flex-shrink: 1;
    width: 200px;
    height: 100%;
    border: 1px solid black;
`

export const MainProdutos = styled.div`
    flex-grow: 1;
    height: 100%;
    border: 1px solid black;

`

export const MenuCarrinho = styled.div`
    flex-shrink: 1;
    width: 280px;
    height: 100%;
    border: 1px solid black;

`

export const Footer = styled.div`
  flex-shrink: 1;
  width: 100%;
  height: 70px;
`
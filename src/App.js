import React from 'react';
import ComponenteProdutos from './components/ComponenteProdutos/ComponenteProdutos';
import { Footer, Header, LayoutMain, MainCommerce, MainProdutos, MenuCarrinho, MenuFiltros } from './styled/AppStyled';


class App extends React.Component {
  render(){
  return (
    <LayoutMain>
      <Header>Header</Header>
      <MainCommerce>
        <MenuFiltros>MenuFiltros</MenuFiltros>
        <MainProdutos>
          <ComponenteProdutos />
        </MainProdutos>
        <MenuCarrinho>MenuCarrinho</MenuCarrinho>
      </MainCommerce>
      <Footer>footer</Footer>
    </LayoutMain>
  );
  }
}

export default App;

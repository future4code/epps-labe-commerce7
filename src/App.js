import React from "react";
import "./App.css";
import logo from "./youtube.png";
import menu from "./hamburguer.png"
import imgcopia from "./imgcopia.png"

function App() {
  const titulo = "Titulo do video"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <body>
      <div className="tela-inteira">
        <header>
        <img className=" " src={menu} />
          <img className="logo" src={logo} />
          <h1>LabTube<sup>BR</sup></h1>
          <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
          <img className="img-busca" src=" " />
          <img className="menu-img-copia" src={imgcopia} />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical"><img className="icones-menu" src=" " />Início</li>
              <li className="botoes-meunu-vertical">
              <img className="icones-menu" src=" " />Em alta</li>
              <li className="botoes-meunu-vertical">
              <img className="icones-menu" src=" />Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical"><img className="iconesps" />Originais</li>
              <li className="botoes-meunu-vertical"><img className="icones-menu" src="" />Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src=" " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src=" " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src=" " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src=" " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src=" " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src=" " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src=" " alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>
        
        <footer>
          <h4>streaming desenvovimento</h4>
        </footer>
      </div>
    </body>
  );
}

export default App;

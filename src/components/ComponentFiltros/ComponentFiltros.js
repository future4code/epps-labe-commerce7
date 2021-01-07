import React from 'react'
import styled from 'styled-components'

const ContainerFiltros = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content:space-evenly; */
    align-items: center;
    width: 250px;
    height: 300px;
`

export default class ComponentFiltros extends React.Component {    

    render() {
        return (
            <ContainerFiltros>
                <h2>Filtros</h2>
                <div>
                    <p>Valor minimo</p>
                    <input 
                    />
                </div>
                <div>
                    <p>Valor maximo</p>
                    <input />
                </div>
                <div>
                    <p>Filtrar por nome</p>
                    <input />
                </div>
            </ContainerFiltros>
        )
    }
}
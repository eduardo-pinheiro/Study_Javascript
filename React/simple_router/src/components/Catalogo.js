import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

const Roupas = () => (
    <h3>Roupas Legais</h3>
)

const Sapatos = () => (
    <h3>Sapatos Legais</h3>
)

function Catalogo( props ) {
    return (
        <div>
            <h2>Catalogo</h2>
            <nav>
                <ul>
                    <li><Link to = { `${props.match.url}/Roupas` } >Roupas</Link></li>
                    <li><Link to = { `${props.match.url}/Sapatos` } >Sapatos</Link></li>                        
                </ul>
            </nav>

            <Switch>
                <Route exact path={ `${props.match.url}/Roupas` } component={ Roupas } />
                <Route path={ `${props.match.url}/Sapatos` } component={ Sapatos } />
            </Switch>
        </div>
    )
}

export default Catalogo;
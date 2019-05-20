import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import Catalogo from '../components/Catalogo'

function Home( props ) {
    return(
        <div>
            <h2>Home</h2>
        </div>
    )
}

class App extends React.Component{
    
    render() {

        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalogo">Catalogo</Link></li>                        
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/catalogo" component={ Catalogo } />
                </Switch>
                
            </div>
        )
    }
}

export default App;
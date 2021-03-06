import React from 'react';
import Board from './Board';
import calculateWinner from '../utils/calculateWinner';

class Game extends React.Component {

    constructor( props ) {
        super( props );
        this.state  = {
        history : [{
            squares : Array( 9 ).fill( null ),
        }],
        xIsNext : true,
        stepNumber : 0,
        }
    }

    jumpTo( step ) {
        this.setState({
            stepNumber : step,
            xIsNext: (step % 2) === 0,
        });
    }

    handleClick( i ) {
        const history = this.state.history.slice( 0, this.state.stepNumber + 1 );
        const current = history[ history.length - 1 ];
        const squares = current.squares.slice();

        if ( calculateWinner( squares ) || squares[i] ) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        
        this.setState({
            history : history.concat([{
                squares : squares,
            }]),
            xIsNext : !this.state.xIsNext,
            stepNumber : history.length,
        });
    }


    render() {
        const history = this.state.history;
        const current = history[ this.state.stepNumber ];
        const winner = calculateWinner( current.squares );
        const draw = current.squares.find( (e) => { return e == null } );

        const moves = history.map( (step, move) => {
        const desc = move ?
        `Vá para o movimento ${ move }` :
        `Vá para o inicio do jogo`;
        return (
            <li key={ move }>
            <button onClick={ () => this.jumpTo( move ) } >{desc}</button>
            </li>
        );
        });

        let status;
        if ( winner ) {
        status = `Vencedor: ${ winner }`;
        } else if ( draw === null ) {
            status = `Próximo: ${ this.state.xIsNext ? 'X' : 'O'}`;
        } else {
            status = "Velha!";
        }
        

        return (

            <div className="game">
                
                <div className="game-board">
                    <Board 
                        squares = { current.squares }
                        onClick = { (i) => this.handleClick( i ) }
                    />
                </div>
                
                <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
                </div>
            
            </div>
        );
    }
}

export default Game;
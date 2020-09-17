import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();
            this.state = {
                number1: 0,
                number2: 0,
                sum: null
            }
    }

    processFirst(num1){
        this.setState({number1: parseInt(num1, 10) })
    }
    processSecond(num2){
        this.setState({number2: parseInt(num2, 10) })
    }

    sum(n1,n2){
        const number1 = n1
        const number2 = n2
        let sum = number1 + number2
        this.setState({sum: sum})
    }

    render() {
        return(
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" onChange={ (e) => this.processFirst(e.target.value)}></input>
                <input className="inputLine" onChange={ (e) => this.processSecond(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.sum(this.state.number1, this.state.number2)}>Submit</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}
export default Sum
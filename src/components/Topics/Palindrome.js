import React, { Component } from 'react'

class Palindrome extends Component {
    constructor(){
        super()
            this.state = {
                userInput: '',
                palindrome: ''
            }
    }

    processing(word){
        this.setState({userInput: word});

    }

    palindromeCheck(input){
        let word = input
        let reversedWord = input;
        reversedWord = reversedWord.split("");
        reversedWord = reversedWord.reverse();
        reversedWord = reversedWord.join("");

        if (word === reversedWord){
            this.setState({palindrome: 'true'});
        }
        else{
            this.setState({palindrome: 'false'});
        }
    }

    render() {
        return  (
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={ (e) => this.processing(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.palindromeCheck(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
            </div>
        )
    }
}
export default Palindrome
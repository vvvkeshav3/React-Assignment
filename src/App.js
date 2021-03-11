import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    string: '',
  };

  textChangeHandler = (event) => {
    this.setState({
      string: event.target.value,
    });
  };

  charRemoveHandler = (index) =>{
    let str = this.state.string;
    let string = str.slice(0,index) + str.slice(index+1);
    // OR
    // const list = this.state.string.split('');
    // list.splice(index,1);
    // let string = list.join('');
    this.setState({
      string : string
    })
  }

  render() {
    const charList = [...this.state.string].map((char,index) => {
      return (<CharComponent 
                char={char} 
                key = {index} 
                remove={()=> this.charRemoveHandler(index)} />);
    })
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in aparagraph).</li>
          <li>Create a new component (= ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or"Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (= CharComponent) and style it as an inline box (= display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" value = {this.state.string} onChange={this.textChangeHandler} />
        <p>{this.state.string.length}</p>
        <ValidationComponent length={this.state.string.length} />
        {charList}
      </div>
    );
  }
}

export default App;

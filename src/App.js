
import './App.css';
import React from 'react';
import { create, all } from 'mathjs';
const math = create(all,  {});
     
     


function App() {
  return (
    <div>
      <Box />
    </div>
  );
}


class Box extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return ( 
      <div>
        <div>
        </div>
        <div id="buttoncollection">
          <ButtonFrame />
        </div>
      </div>
    )
  }
}

class ButtonFrame extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    mathchallenge:0
  }
  };
  clickHandle(e) {
      console.log(e.target.value,this.mathchallenge)
     if(this.state.mathchallenge=='0'){
      this.setState({ 
        mathchallenge: e.target.value
   })}else{
    this.setState({ 
      mathchallenge: this.state.mathchallenge+e.target.value
 })
   }
      console.log(this.state.mathchallenge)
  } 
  resetHandle(e) {
    this.setState({ 
      mathchallenge:0
  })
  }
  submitHandle(e) {
    this.setState({ 
      mathchallenge: math.evaluate(this.state.mathchallenge)
     })
  console.log(this.state.mathchallenge)  
}


  render() {
    
    return (
      <div id="calc">
        <Display mathchallenge={this.state.mathchallenge} />
    <div id="buttons">
      <button type="button" id="one" value={1} onClick={e => this.clickHandle(e,"value")} >1</button>
      <button type="button" id="two" value="2" onClick={e => this.clickHandle(e,"value")}>2</button>
      <button type="button" id="three" value="3" onClick={e => this.clickHandle(e,"value")}>3</button>
      <button type="button" id="add" value="+" onClick={e => this.clickHandle(e,"value")}>+</button>
      <button type="button" id="four" value="4" onClick={e => this.clickHandle(e,"value")}>4</button>
      <button type="button" id="five" value="5" onClick={e => this.clickHandle(e,"value")}>5</button>
      <button type="button" id="six" value="6" onClick={e => this.clickHandle(e,"value")}>6</button>
      <button type="button" id="subtract" value="-" onClick={e => this.clickHandle(e,"value")}>-</button>
      <button type="button" id="seven" value="7" onClick={e => this.clickHandle(e,"value")}>7</button>
      <button type="button" id="eight" value="8" onClick={e => this.clickHandle(e,"value")}>8</button>
      <button type="button" id="nine" value="9" onClick={e => this.clickHandle(e,"value")}>9</button>
      <button type="button" id="multiply" value="*" onClick={e => this.clickHandle(e,"value")}>*</button>
      <button type="button" id="zero" value="0" onClick={e => this.clickHandle(e,"value")}>0</button>
      <button type="reset"  id="clear" onClick={e => this.resetHandle(e,"value")}>C</button>
      <button type="button" id="decimal" value="." onClick={e => this.clickHandle(e,"value")}>.</button>
      <button type="button" id="divide" value="/" onClick={e => this.clickHandle(e,"value")}>/</button>
      <button type="button" id="equals" value="=" onClick={e => this.submitHandle(e,"value")}>=</button>
      </div>
    </div>
    )
  }
}



class Display extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <div id="display">
    <p>{this.props.mathchallenge}</p>
    </div>
    )
  }
}

class DisplayOutput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return 1
  }
}




export default App;



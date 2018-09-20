import React, { Component } from 'react';
import './Dropdown.css';
import logo from "../App/logo.svg";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false }
  }
  toggleState() {
    this.setState({ isOpened: !this.state.isOpened })
  }
  render() {
    console.log( 'isOpened', this.state.isOpened );
    let dropdownText;
    if ( this.state.isOpened ) {
      dropdownText = <div>It dropdown text</div>;
    }
    return (
      <div className="Dropdown">
        <header className="Dropdown-header">
            <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dropdown component</h1>
        </header>
        <p className="Dropdown-intro">
          Yeah! We created new component! <code>src/components/Dropdown/Dropdown.js</code><br/> Good work!.
        </p><br/><br/>
        <span>Click to button for toggle state</span><br/><br/>
        <button onClick={this.toggleState.bind(this)}>Click</button>
        <br/><br/>
        { dropdownText }
      </div>
    );
  }
}

export default Dropdown;

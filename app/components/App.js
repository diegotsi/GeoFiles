import React, { Component } from 'react';
// import img from '../assets/images/react_logo_512x512.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { nameInput: '', passInput: '' };
  }

  // Input name.
  nameInput = (e) => {
    this.setState({ nameInput: e.target.value });
  };

  // Pass name.
  passInput = (e) => {
    this.setState({ passInput: e.target.value });
  }

  // Submit.
  submit = () => {
    console.log('Entrada: ', this.state.nameInput, this.state.passInput);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.nameInput} value={this.state.nameInput} placeholder="Usuário" />
        <input type="text" onChange={this.passInput} value={this.state.passInput} placeholder="Senha" />
        <button onClick={this.submit}>Login</button>
      </div>
    );
  }

}// Fim do component.

export default App;

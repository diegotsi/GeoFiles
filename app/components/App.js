import React, { Component } from 'react';
// import img from '../assets/images/react_logo_512x512.png';
import ApiService from './../services/ApiServices';

const style = {
  cont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 80px)',
  },
}

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
    ApiService.isRegister(this.state.nameInput, this.state.passInput).then(res => {
      console.log(res);

      // **** Testar registro ****
      ApiService.registerUser('ilma', '12356').then(res => {
        console.log('Registro: ', res);
      }).catch(err => {
        console.log('Registro: ', err);
      });

    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div style={style.cont}>
        <input type="text" onChange={this.nameInput} value={this.state.nameInput} placeholder="Usuário" />
        <input type="text" onChange={this.passInput} value={this.state.passInput} placeholder="Senha" />
        <button onClick={this.submit}>Login</button>
      </div>
    );
  }

}// Fim do component.

export default App;
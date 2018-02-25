import axios from 'axios';

const urlIsLogged = "https://agile-cliffs-74468.herokuapp.com/drop/user/logged";
const urlRegisterUser = "https://agile-cliffs-74468.herokuapp.com/drop/user/register";

/**
 * Classe que gerencia o acesso ao serviços da API.
 * https://agile-cliffs-74468.herokuapp.com/
 * 
 * @class ApiService
 */
class ApiService {
  /**
   * Verifica se um usuário está cadastrado no sistema.
   * 
   * @static
   * @param {any} name nome do usuário vindo do input do formulário.
   * @param {any} pass senha do """" """".
   * @returns {Promise} resolve(msg: 1, data: dados) se o usuário estiver cadastrado, resolve(msg: 0) se o usuário 
   * está logado mas a senha está errada, resolve(msg: -1) se o usuário não está cadastrado, reject(msg: 501) se a 
   * operação não foi possível.
   * @memberof ApiService
   */
  static isRegister(name, pass) {
    const user = {name: name, pass: pass };
    return new Promise((resolve, reject) => {
      axios.post(urlIsLogged, user).then(res => {
        if (res.data['msg'] === 1) {
          resolve({ msg: 1, data: res.data['data'] });
        }
        else if (res.data['msg'] === 0) {
          resolve({ msg: 0 });
        }
        else if (res.data['msg'] === -1)
          resolve({ msg: -1 });
        else
          reject({ msg: 501 });
      }).catch(err => {
        reject({ msg: 501 });
      });
    });
  } // Fim do método.


  /**
   * Cadastra um usuário no sistema.
   * 
   * @static
   * @param {any} name nome do usuário vindo do input
   * @param {any} pass senha do usuário vindo do input.
   * @returns {Promise} (msg: 1, data: dados) se o usuário foi cadastrado com sucesso,
   * (msg: 0, data: 'usuário já cadastrado') se um usuário já estiver cadastrado com o nome passado.
   * (msg: 501, data: null) se algum erro ocorreu no servidor, no firebase ou no webapp.
   * @memberof ApiService
   */
  static registerUser(name, pass) {
    const user = { name, pass };
    // console.log('www: ', user);
    return new Promise((resolve, reject) => {
      axios.post(urlRegisterUser, user).then(res => {
        console.log(res);
        if (res.data['msg'] === 1) {
          resolve({ msg: 1, data: res.data['data'] });
        }
        else if (res.data['msg'] === 0)
          resolve({ msg: 0, data: res.data['data'] });
        else
          reject({ msg: 501, data: null });
      }).catch(err => {
        console.log(err);
        reject({ msg: 501, data: null });
      });
    });
  }

}// Fim da classe

export default ApiService;
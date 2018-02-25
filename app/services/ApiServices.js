import axios from 'axios';

const urlIsLogged = "https://agile-cliffs-74468.herokuapp.com/drop/user/logged";

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
    const user = { name, pass };
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

}// Fim da classe

export default ApiService;
import { readJSON } from '../../utils/read_json_require.js';
const puntosArg = readJSON('../datasources/puntos_arg.json');

/**
 * Modelo de api arg, con los puntos
 * de reciclaje de argentina, importados desde /datasources/puntos_arg.json
 */
export class ApiArgModel {

  /**
   * @returns {Number}
   */
  static getLength = async () => {
    return puntosArg.values.length
  }

  /**
   * @returns {[]String[]} Array con array de Strings
   */
  static getAll = async() => puntosArg.values;

/**
 * Filtra por posición
 * @param {Number} order 
 * @returns {Object}
 */
  static getOrder = async( order ) => {
    const formatedObj = {
      nombre: puntosArg.values[order][0],
      categoria: puntosArg.values[order][1],
      color: puntosArg.values[order][2],
      municipio: puntosArg.values[order][3],
      provincia: puntosArg.values[order][4],
      region: puntosArg.values[order][5],
      direccion: puntosArg.values[order][6],
      latitud: puntosArg.values[order][7],
      longitud: puntosArg.values[order][8]
    }
    return formatedObj;
  }


}



"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campers = void 0;
class Campers {
    constructor(nombre, edad, email, phone, centro, ruta, _rutaCompletada) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.phone = phone;
        this.centro = centro;
        this.ruta = ruta;
        this._rutaCompletada = _rutaCompletada;
    }
    set completado(complete) {
        this._rutaCompletada = complete;
    }
    get completado() {
        return this._rutaCompletada;
    }
}
exports.Campers = Campers;

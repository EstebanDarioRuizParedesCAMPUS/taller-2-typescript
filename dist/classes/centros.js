"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Centros = void 0;
class Centros {
    constructor(nombre, lugar, _capacidad, _dueno) {
        this.nombre = nombre;
        this.lugar = lugar;
        this._capacidad = _capacidad;
        this._dueno = _dueno;
    }
    set capacity(capacity) {
        this._capacidad = capacity;
    }
    set dueno(dueno) {
        this._dueno = dueno;
    }
    get capacity() {
        return this._capacidad;
    }
    get dueno() {
        return this._dueno;
    }
}
exports.Centros = Centros;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rutas = void 0;
class Rutas {
    constructor(nombre, duracion, _cupos) {
        this.nombre = nombre;
        this.duracion = duracion;
        this._cupos = _cupos;
    }
    set capacity(capacity) {
        this._cupos = capacity;
    }
    get capacity() {
        return this._cupos;
    }
}
exports.Rutas = Rutas;

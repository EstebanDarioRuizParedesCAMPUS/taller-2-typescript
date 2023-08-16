"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contratos = void 0;
class Contratos {
    constructor(empresa, ubicacion, _tipoContrato, _sueldo) {
        this.empresa = empresa;
        this.ubicacion = ubicacion;
        this._tipoContrato = _tipoContrato;
        this._sueldo = _sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    set tipoContrato(tipoContrato) {
        this._tipoContrato = tipoContrato;
    }
    get tipoContrato() {
        return this._tipoContrato;
    }
    get sueldo() {
        return this._sueldo;
    }
}
exports.Contratos = Contratos;

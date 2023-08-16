class Contratos{
    constructor(
        public empresa:string,
        public ubicacion:string,
        private _tipoContrato:string,
        private _sueldo: number,
    ){}
      
    set sueldo(sueldo:number){
        this._sueldo = sueldo
    }

    set tipoContrato(tipoContrato:string){
        this._tipoContrato = tipoContrato
    }

    get tipoContrato(){
        return this._tipoContrato
    }

    get sueldo(){
        return this._sueldo
    }
}

export { Contratos}
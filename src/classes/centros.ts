class Centros{
    constructor(
        public nombre:string,
        public lugar:string,
        private _capacidad: number,
        private _dueno:string
    ){}
      
    set capacity(capacity:number){
        this._capacidad = capacity
    }

    set dueno(dueno:string){
        this._dueno = dueno
    }

    get capacity(){
        return this._capacidad
    }

    get dueno(){
        return this._dueno
    }
}

export {Centros}
class Rutas{
    constructor(
        public nombre:string,
        public duracion:string,
        private _cupos: number,
    ){}
      
    set capacity(capacity:number){
        this._cupos = capacity
    }

    get capacity(){
        return this._cupos
    }
}

export { Rutas}
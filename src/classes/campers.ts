class Campers{
    constructor(
        public nombre:string,
        public edad:number,
        public email:string,
        public phone: number,
        public centro:string,
        public ruta:string,
        private _rutaCompletada: boolean
    ){}

    set completado(complete:boolean){
        this._rutaCompletada = complete
    }

    get completado(){
        return this._rutaCompletada
    }

}

export {Campers}
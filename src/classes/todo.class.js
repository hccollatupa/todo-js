export class Todo {
    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime(); //13245845
        this.completado = false;
        this.creado = new Date();
    }
}
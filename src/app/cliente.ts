export class Empleado {
    public id:  number;
    public nombre: string;
    public email: string;
    public direccion: string;
    public telefono: string;
    public departamento:  string;
    constructor(id: number, nombre: string , email: string, direccion: string, telefono: string, departamento: string){ 
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;
        this.departamento = departamento;
    }
}
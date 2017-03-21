import { Component, OnInit } from '@angular/core';
export class Vehiculo {
  public numeroInv: string;
  public descripcion: string;
  public fecha_entrada: string;
  public fecha_salida: string;
  private observaciones?: string;
  constructor(niv, desc, fe, fs, obs?){
    this.numeroInv = niv;
    this.descripcion = desc;
    this.fecha_entrada = fe;
    this.fecha_salida = fs;
    this.observaciones = obs; 
  }
 }
@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  public model =  new Vehiculo('03001','Sedán','2015-01-02','2015-01-07');
  public accionInmediata: Vehiculo[];
  public accionPosterior: Vehiculo[];
  constructor() { 
    this.accionInmediata = [ ];
    this.accionPosterior = [ ];
  }
  private ObtenerDiasDelMesActual (anio: number, mes: number){
      return new Date(anio,mes+1,0).getDate();
  }
  public agregarVehiculo(vehicle: Vehiculo){
    /* Crea un arreglo para cada valor de la fecha separandolo por el formato aaaa-mm-dd */ 
    let ArregloFechaDeEntrada = vehicle.fecha_entrada.split("-");
    /* Crea una instancia de tipo Date asignando el valor correspondiente en el arreglo*/
    let fechaEntrada = new Date(Number(ArregloFechaDeEntrada[0]),Number(ArregloFechaDeEntrada[1])-1,Number(ArregloFechaDeEntrada[2]));
    let dm_fe = this.ObtenerDiasDelMesActual(Number(ArregloFechaDeEntrada[1])-1,Number(ArregloFechaDeEntrada[0]));
    let ArregloFechaDeSalida = vehicle.fecha_salida.split("-");
    let fechaSalida =  new Date(Number(ArregloFechaDeSalida[0]),Number(ArregloFechaDeSalida[1])-1,Number(ArregloFechaDeSalida[2]));
      if(fechaSalida>fechaEntrada){
          if((fechaSalida.getMonth() > fechaEntrada.getMonth())){ 
            (dm_fe - fechaEntrada.getDate()) + fechaSalida.getDate() < 10 ?  this.accionInmediata.push(vehicle) : this.accionPosterior.push(vehicle);
          }
          else if((fechaSalida.getMonth() < fechaEntrada.getMonth()) &&  
                  (fechaSalida.getFullYear() - fechaEntrada.getFullYear() == 1)){
             this.accionInmediata.push(vehicle);
          }
          else if(fechaSalida.getMonth() === fechaEntrada.getMonth() && 
                 (fechaSalida.getDate()-fechaEntrada.getDate() < 10)){
             this.accionInmediata.push(vehicle);
          }
          else { 
              this.accionPosterior.push(vehicle)
          }
      }
    else { 
        return;
    }   
  }
}
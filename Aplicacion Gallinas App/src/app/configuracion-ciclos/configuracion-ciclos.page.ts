import { Component, OnInit } from '@angular/core';
import { ServiciosGService } from '../servicios-g.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion-ciclos',
  templateUrl: './configuracion-ciclos.page.html',
  styleUrls: ['./configuracion-ciclos.page.scss'],
})
export class ConfiguracionCiclosPage implements OnInit {

  ciclos: any[];
  fechaInicial: string
  numPollos: number;
  numCiclos: number;
  idGalpon: string;

  constructor(public _Servicios: ServiciosGService,
    private storage: Storage,
    public navCtrl: NavController) { }


  ngOnInit() {
    this.storage.get("_idGalpon").then(res => {
      this.idGalpon = res;
    })
  }

  confirmarCiclos() {
    this.ciclos = []
    for (let i = 0; i < this.numCiclos; i++) {
      this.ciclos.push({ num: i + 1, setPointTEMP: "", setPointHUM: "", dias: "" })
    }
  }

  onChange(event) {
    console.log("aa: " + event.detail.value)
    this.fechaInicial = event.detail.value
    this.fechaInicial = this.fechaInicial.substring(0, 10)
  }
  crearCiclo() {
    let dias: number = 0;
    let diaTemp = "";
    let mesTemp = "";
    for (let item of this.ciclos) {
      dias += item.dias;
    }
    let tempDate: Date = new Date(this.fechaInicial);
    tempDate.setDate(tempDate.getDate() + dias)
    console.log(tempDate.getUTCDate());
    if (tempDate.getUTCDate() < 10) {
      diaTemp = "0" + tempDate.getUTCDate();
    } else {
      diaTemp = "" + tempDate.getUTCDate();
    }
    if (tempDate.getUTCMonth() < 10) {
      mesTemp = "0" + tempDate.getUTCMonth();
    } else {
      mesTemp = "" + tempDate.getUTCMonth();
    }
    let fechafin = diaTemp + "-" + mesTemp + "-" + tempDate.getUTCFullYear();
    console.log(fechafin);
    const cicloNuevo = {
      fechaInicial: this.fechaInicial, numeroCiclos: this.numCiclos,
      ciclos: this.ciclos, numPollos: this.numPollos, numPollosDead: 0, diasTotales: dias, fechaFinal: fechafin
    };
    this._Servicios.CreateCicle(cicloNuevo, this.idGalpon);
  }
  back() {
    this.navCtrl.back();
  }

  addDays(date: Date, days: number) {
    date.setDate(date.getDate() + days);
    console.log(date);
    return date;
  }

}

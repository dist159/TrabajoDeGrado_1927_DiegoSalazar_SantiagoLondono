import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-ciclo',
  templateUrl: './config-ciclo.component.html',
  styleUrls: ['./config-ciclo.component.scss'],
})
export class ConfigCicloComponent implements OnInit {

  ciclos: any[]=[]
  numCiclos: number;
  constructor() { }

  ngOnInit() {}

  confirmarCiclos(){
for(let i=0;i<this.numCiclos;i++){
  this.ciclos.push({num:1})
}
  }

}

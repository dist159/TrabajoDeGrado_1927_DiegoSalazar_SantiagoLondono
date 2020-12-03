import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ModalController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';
import { ServiciosGService, usuario } from '../servicios-g.service';
import { constants } from 'buffer';
import { ConfigCicloComponent } from '../componentes/config-ciclo/config-ciclo.component';
import { interval } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {


  /* Variables para los sensores */
  TemperaturaPromedioP: string;
  TemperaturaPromedio: number = 0;
  humedad: number = 0;
  temperatura: number = 0;
  humedad2: number = 0;
  temperatura2: number = 0;
  humedad3: number = 0;
  temperatura3: number = 0;
  contador: any = 200;
  /*Variables del usuario*/
  UsuarioLocal: usuario;
  idGalpon: string;

  Alerta: boolean = false;
  conexion: boolean = false;
  FlujodeAire: boolean = false;
  setPoint: number = 19;
  setPointH: number = 50;

  /** ciclo pollos */
  yy: string;

  fechaActual: string = (new Date().toISOString().substring(0, 4) + "-" + new Date().toISOString().substring(5, 7) + "-" + (new Date().toISOString().substring(8, 10)));



  constructor(private menu: MenuController,
    public navCtrl: NavController,
    public _Servicios: ServiciosGService,
    private storage: Storage,
    private db: AngularFireDatabase,
    private modal: ModalController) { }

  ngOnInit() {

    /** Carga directamente los datos del servidor almacenados para cada uno de los sensosres */
    /** Se obtiene el objeto de usuario y se determina el galpon */
    this._Servicios.userState().subscribe((user: firebase.User) => {
      console.log(user.uid)
      const _getUsuario = this._Servicios.getUsuario(user.uid).subscribe(res => {
        this.UsuarioLocal = res.payload.val() as usuario;
        this.idGalpon = this.UsuarioLocal.galponid;
        this.storage.set('_idGalpon', this.idGalpon);
        console.log(this.idGalpon)

        /** Se obtiene el estado de conexion con el modulo */

        this.db.object("Galpones/" + this.idGalpon + "/fechaUltimaConexion").snapshotChanges().subscribe(action => {
          let fecha = (action.payload.val() as string)

          //emit value in sequence every 1 second
          const source = interval(10000);
          //output: 0,1,2,3,4,5....
          const subscribe = source.subscribe(val => {
            this.verificarConexion(fecha,(action.payload.val() as string));
          });

          



        });

        /** Determina el contador para asiganarlo como un indice y obtener el ultimo dato almacenado en el servidor */
        this.db.object("Galpones/" + this.idGalpon + "/" + 'contador').snapshotChanges().subscribe(action => {
          console.log(action.type);
          console.log(action.key)
          console.log(action.payload.val())
          this.contador = action.payload.val() as number;


          /** Se obtiene el ultimo dato almacenado en la base de datos para la temperatura de x galpon para el sensor 1 */
          this.db.object("Galpones/" + this.idGalpon + "/" + "SensorTemp1/" + (this.contador - 1) + "/val").snapshotChanges().subscribe(action => {
            console.log(action.type);
            console.log(action.key)
            console.log(action.payload.val())
            this.temperatura = action.payload.val() as number
            if (action.payload.val() >= 38) {
              this.Alerta = true;
            } else {
              this.Alerta = false;
            }
            this.TemperaturaPromedio = (this.temperatura + this.temperatura2 + this.temperatura3) / 3;
            this.TemperaturaPromedioP = Number(this.TemperaturaPromedio).toFixed(2)
          });

          /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 1 */
          this.db.object("Galpones/" + this.idGalpon + "/" + "SensorHum1/" + (this.contador - 1) + "/val").snapshotChanges().subscribe(action => {
            console.log(action.type);
            console.log(action.key)
            console.log(action.payload.val())
            this.humedad = action.payload.val() as number

          });

          /** Se obtiene el ultimo dato almacenado en la base de datos para la temperatura de x galpon para el sensor 2 */
          this.db.object("Galpones/" + this.idGalpon + "/" + "SensorTemp2/" + (this.contador - 1) + "/val").snapshotChanges().subscribe(action => {
            console.log(action.type);
            console.log(action.key)
            console.log(action.payload.val())
            this.temperatura2 = action.payload.val() as number
            if (action.payload.val() >= 38) {
              this.Alerta = true;
            } else {
              this.Alerta = false;
            }
            this.TemperaturaPromedio = (this.temperatura + this.temperatura2 + this.temperatura3) / 3;
            this.TemperaturaPromedioP = Number(this.TemperaturaPromedio).toFixed(2)
          });

          /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 2 */
          this.db.object("Galpones/" + this.idGalpon + "/" + "SensorHum2/" + (this.contador - 1) + "/val").snapshotChanges().subscribe(action => {
            console.log(action.type);
            console.log(action.key)
            console.log(action.payload.val())
            this.humedad2 = action.payload.val() as number
          });

          /** Se obtiene el ultimo dato almacenado en la base de datos para la temperatura de x galpon para el sensor 3 */
          this.db.object("Galpones/" + this.idGalpon + "/" + "SensorTemp3/" + (this.contador - 1) + "/val").snapshotChanges().subscribe(action => {
            console.log(action.type);
            console.log(action.key)
            console.log(action.payload.val())
            this.temperatura3 = action.payload.val() as number
            if (action.payload.val() >= 38) {
              this.Alerta = true;
            } else {
              this.Alerta = false;
            }

            this.TemperaturaPromedio = (this.temperatura + this.temperatura2 ) / 2;
            this.TemperaturaPromedioP = Number(this.TemperaturaPromedio).toFixed(2)
            console.log("wwwowowow" + Number(this.TemperaturaPromedio).toFixed(2))

          });

          /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 3 */
          this.db.object("Galpones/" + this.idGalpon + "/" + "SensorHum3/" + (this.contador - 1) + "/val").snapshotChanges().subscribe(action => {
            console.log(action.type);
            console.log(action.key)
            console.log(action.payload.val())
            this.humedad3 = action.payload.val() as number
          });


          /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 1 */
          this.db.object("Galpones/" + this.idGalpon + "/" + "Actuadores/Actuador1_1").snapshotChanges().subscribe(action => {
            console.log(action.type);
            console.log(action.key)
            console.log(action.payload.val())
            if (action.payload.val() == 1) {
              this.FlujodeAire = true;
            } else {
              this.FlujodeAire = false;
            }

          });
          /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 1 */
          this.db.object("Galpones/" + this.idGalpon + "/" + "Actuadores/Actuador1_2").snapshotChanges().subscribe(action => {
            console.log(action.type);
            console.log(action.key)
            console.log(action.payload.val())
            if (action.payload.val() == 1) {
              this.FlujodeAire = true;
            } else {
              this.FlujodeAire = false;
            }

          });
          /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 1 */
          this.db.object("Galpones/" + this.idGalpon + "/" + "Actuadores/Actuador1_3").snapshotChanges().subscribe(action => {
            console.log(action.type);
            console.log(action.key)
            console.log(action.payload.val())
            if (action.payload.val() == 1) {
              this.FlujodeAire = true;
            } else {
              this.FlujodeAire = false;
            }

          });
        });


        _getUsuario.unsubscribe();
      });
    });
  }

  /*FN****************************************************************************
  *
  *   void userState()
  *
  *   Retorna:         El estado de la autenticidad del ususario
  *
  *   Proposito:       Permite obtener el estado de la autenticidad del usuario 
  *                    verificando si la sesion esta iniciada.  
  *
  *******************************************************************************/
  control() {
    this.navCtrl.navigateRoot('/home');
  }

  /*FN****************************************************************************
  *
  *   void openHeatMap()
  *
  *   Retorna:         Nada
  *
  *   Proposito:       Navega a la pagina heatmap. 
  *
  *******************************************************************************/
  openHeatMap() {
    this.navCtrl.navigateRoot('/heatmap');
  }

  /*FN****************************************************************************
  *
  *   void openEnd()
  *
  *   Retorna:         Nada
  *
  *   Proposito:       Abre el menu lateral.
  *
  *******************************************************************************/
  openEnd() {
    this.menu.toggle('custom');
  }

  /*FN****************************************************************************
  *
  *   void cerrar()
  *
  *   Retorna:         Nada
  *
  *   Proposito:       Cierra la sesion al borrar las credenciales del usuario 
  *                    y modifica la bandera de la sesion iniciada.  
  *
  *******************************************************************************/
  cerrar() {
    this.storage.set('log', 'no');
    this._Servicios.cerrarSesion();
    this.navCtrl.navigateRoot('/iniciar-sesion');

  }
  config() {

  }

  ayuda() {

  }

  alertas() {

  }

  setpointInput(event) {
    console.log("setpoint Sin: " + event.target.value)
    if (event.target.value < 40 && event.target.value > 10) {
      this.setPoint = event.target.value;
      console.log("setpoint: " + event.target.value)
      event.target.value = "";
    } if (event.target.value >= 40) {
      event.target.value = "";
    }
  }

  iniciarCiclo() {
    this.yy = (new Date().toISOString().substring(0, 4) + "-" + new Date().toISOString().substring(5, 7) + "-" + (new Date().toISOString().substring(8, 10)));
    this._Servicios.startCicle(this.yy, this.idGalpon, 40, "normal", 60);
  }

  configurarCiclo() {
    this.navCtrl.navigateRoot('/configuracion-ciclos');
  }



  /**Verificar conexion con el modulo */

  verificarConexion(fecha,fechaReal) {
// 19 Sep 2020 00:05:08
console.log("Largo es:" + fecha.length)
if (fecha.length == 20) {
  console.log("SI Entro")
  fecha = "";
  for (let g = 0; g < fechaReal.length; g++) {
    if (g == 12) {
      fecha += "0" + fechaReal.charAt(g)
    } else {
      fecha += "" + fechaReal.charAt(g)
    }
  }
  console.log(fecha)
}

const day = fecha.substring(0, 2);
const month = fecha.substring(3, 6);
const year = fecha.substring(7, 11);
const hour = fecha.substring(12, 14);
const minutes = fecha.substring(15, 18);
const seconds = fecha.substring(19, 21);

let mes;
switch (month) {
  case "Jan": mes = 0;
    break;
  case "Feb": mes = 1;
    break;
  case "Mar": mes = 2;
    break;
  case "Abr": mes = 3;
    break;
  case "May": mes = 4;
    break;
  case "Jun": mes = 5;
    break;
  case "Jul": mes = 6;
    break;
  case "Ago": mes = 7;
    break;
  case "Sep": mes = 8;
    break;
  case "Oct": mes = 9;
    break;
  case "Nov": mes = 10;
    break;
  case "Dec": mes = 11;
    break;
}
let date = new Date();

if (date.getFullYear() == parseInt(year)) {
  console.log("Si entro1")
  if (date.getMonth() == mes) {
    console.log("Si entro2")
    if (date.getDate() == parseInt(day)) {
      console.log("Si entro3")
      if (date.getHours() == parseInt(hour)) {
        console.log("Si entro4:: "+(date.getMinutes() -3)+ " :: "+parseInt(minutes))
        if ((date.getMinutes() -2) <= parseInt(minutes)) {
          this.conexion =  true;
          console.log("Si entro5")
        } else {
          this.conexion = false;
        }
      } else {
        this.conexion = false;
      }
    } else {
      this.conexion = false;
    }
  } else {
    this.conexion = false;
  }
} else {
  this.conexion = false;
}
  }
}



/* index.js *******************************************************************/
/*                                                                            */
/*                        Motor del servidor                                  */
/*                                                                            */
/******************************************************************************/

/*******************************************************************************

    Notas:           las funciones en este codigo se ejecutaran en el servidor 
                     dedicado. Su funcion principal es consultar todos los dias a
                     la base de datos y verificar si se encuentra un ciclo de
                     crianza activo.

    Registro de Revisiones:

    FECHA      RESPONSABLE  REVISION
    -----------------------------------------------------------------------
    Sep 09/20  S.Londoño    Creacion

    Sep 09/20  D.Salazar    Creacion


*******************************************************************************/

/** Declarion de constantes para comunicarse con el servidor y base de datos */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

/** Se configura la funciona para que se ejecute todos los dias a la 1 am en base a la zona horario de Colombia*/
exports.scheduledFunctionCrontabparaBogota = functions.pubsub.schedule('0 1 * * *')
    .timeZone('America/Bogota') 
    .onRun((context) => {
        /** Se conecta con la base de datos del galpon */
        var dbRef = admin.database().ref('/Galpones/CUNCOG01');
        dbRef.once("value", function (snap) {
            console.log("galponA");
            var datetime = new Date();
            console.log(datetime);
            let galpon = snap.val()
            console.log(galpon);
            console.log("ActuadoresA: " + snap.val().Actuadores)
            console.log("ActuadoresB: " + galpon.Actuadores)
            console.log("Setpoints: " + snap.val().setPoints)
            console.log("Ciclo activo: " + snap.val().cicloActivo)
            if (galpon.cicloActivo && !galpon.permitirCiclos) {

                var date1 = new Date(snap.val().ciclo.fechaInicial);
                var date2 = new Date();
               //** se calcula la diferencia en dias */
                var Difference_In_Time = date2.getTime() - date1.getTime();
                var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                console.log("Dias entre:" + Difference_In_Days)
                var todaDiasTodoElciclo = 0;
                var cicloActivo;
                for (let ciclo of snap.val().ciclo.ciclos) {
                    if (ciclo.dias + todaDiasTodoElciclo > Difference_In_Days) {
                        console.log("cicloactual: " + ciclo.num)
                        cicloActivo = ciclo
                        todaDiasTodoElciclo += ciclo.dias;
                        break;
                    }
                    todaDiasTodoElciclo += ciclo.dias;
                }
                /** Actuliza en el servido el valor de la temperatura y humedad a controlar */
                if (Difference_In_Days > todaDiasTodoElciclo) {
                    dbRef.update({ cicloTerminado: 1, cicloActivo: 0 });
                } else {
                    dbRef.update({ setPoints: "h1" + cicloActivo.setPointTEMP + cicloActivo.setPointHUM * 100 });
                }
                return null;
            } else {
                if (galpon.permitirCiclos) {
                    if (galpon.ciclo) {
                        if (Date(galpon.ciclo.fechaInicial) >= datetime) {
                            var date1 = new Date(snap.val().ciclo.fechaInicial);
                            var date2 = new Date();
                           /** Calcula la diferencia entre las dos fechas */
                            var Difference_In_Time = date2.getTime() - date1.getTime();
                            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                            console.log("Dias entre:" + Difference_In_Days)
                            var todaDiasTodoElciclo = 0;
                            var cicloActivo;
                            for (let ciclo of snap.val().ciclo.ciclos) {
                                if (ciclo.dias + todaDiasTodoElciclo > Difference_In_Days) {
                                    console.log("cicloactual: " + ciclo.num)
                                    cicloActivo = ciclo
                                    todaDiasTodoElciclo += ciclo.dias;
                                    break;
                                }
                                todaDiasTodoElciclo += ciclo.dias;
                            }
                            dbRef.update({ setPoints: "h1" + cicloActivo.setPointTEMP + cicloActivo.setPointHUM * 100, cicloActivo: 1 });
                            console.log('Se inicio un nuevo ciclo');
                            return null;
                        }
                    }
                }

                console.log('Sistema atomatizado de ciclo no se encunetra activo');
                return null
            }
        });
    });

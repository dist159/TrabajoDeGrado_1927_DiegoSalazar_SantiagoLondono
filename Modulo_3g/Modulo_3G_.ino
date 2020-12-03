
/* Modulo_3g ******************************************************************/
/*                                                                            */
/*                        Main modulo GSM 3G                                  */
/*                                                                            */
/******************************************************************************/

/*******************************************************************************

    Notas:           Este codigo se encarga del funcionamiento del modulo UG95
                     Permite comunicarlo con un servidor de firebase al enviar
                     y recibir informacion por medio de la red celular 3G.

    Registro de Revisiones:

    FECHA      RESPONSABLE  REVISION
    -----------------------------------------------------------------------
    Mar 09/17  S.Londoño    Implementacion original

    Mar 09/17  D.Salazar    Implementacion original


*******************************************************************************/

/* ------------------------- Declaracion de librerias -------------------------- */

#include <SoftwareSerial.h>
#include <Wire.h>
#include "Adafruit_Si7021.h"
#include <PCD8544.h>
#include "TEE_UC20.h"
#include "internet.h"
#include "firebase.h"

/* ---------------- Variables para configurar la red celular ---------------- */
INTERNET net;
FIREBASE firebase;
/*Posibles redes para conectarse*/
#define APN "Internet.comcel.com.co"
//#define APN "web.colombiamovil.com.co"
//#define APN "lte.avantel.com.co"
//#define APN "internet.movistar.com.co"
/*Usuario y clave de la red*/
#define USER ""
#define PASS ""

/* ----------------- Variables para configurar del servidor ----------------- */
/*Identificador unico del galpon*/
String IdentificadorGalpon = "CUNCOG01"; //Cundinamarca cogua 01

/*Direccion del servidor*/
#define FIREBASE_URL      "goldenchicken-6d6f4.firebaseio.com"

/*Clave de segurida del servidor*/
#define FIREBASE_SECRET   "YqdcKUdBv3oJxqSRX7v7RRJ8oPGIkvgD8gfbkpYR"

/*indice del dato actual*/
int contador = 0;


#define Pin_STATUS 15
/* --------- Variables de los sensores y el multiplexor --------- */
Adafruit_Si7021 sensor = Adafruit_Si7021();
float temp1 = 0;
float hum1 = 0;
float temp2 = 0;
float hum2 = 0;
float temp3 = 0;
float hum3 = 0;
float temp4 = 0;
double hum4 = 0;
String estadoActuadores="";
/* -------------- Variables para configurar de la pantalla lcd --------------- */
PCD8544 lcd;

String timea = "";
String fecha_original_firebase = "";
String string_con_la_fecha = "";




/* --------------------- Variables de los actuadores ---------------------- */

int Actuador1 = 40;
int Actuador2 = 41;

int controlManual = 0;

int Vel1_1 = 0;
int Vel1_2 = 0;
int Vel1_3 = 0;

int Vel2_1 = 0;
int Vel2_2 = 0;
int Vel2_3 = 0;

int Vel3_1 = 0;
int Vel3_2 = 0;
int Vel3_3 = 0;

int Damper_1 = 0;
int Damper_2 = 0;
int Foger = 0;

int calefactorA = 1;
int calefactorB = 1;
int estractor = 1;
int humedificador = 1;

boolean Calefactor_1 = 0;
boolean Calefactor_2 = 0;
boolean Calefactor_3 = 0;

boolean recibiendo = false;
boolean empezo = false;

String setPoints="";

/* ----------------------- Variables de los timers ----------------------- */

/*Contador 1*/
unsigned long previousMillis = 0;
const long interval = 500;

/*Contador 2*/
unsigned long previousMillis2 = 0;
const long interval2 = 10000;

/*Contador 3*/
unsigned long previousMillis3 = 0;
const long interval3 = 10000;

/* ------------------ Variables del programa principal ------------------- */

SoftwareSerial mySerial(12, 13);
SoftwareSerial mySerial2(9, 8); //RX TX
SoftwareSerial mySerial3(3, 4); //RX TX


void setup()
{
  /* -------------------- Declaracion de los pines I/O --------------------- */

  /*DECLARACION PINES PARA LOS 16 RELES*/
  pinMode(36, OUTPUT); // VIN fuente 1 (5 voltios)

  /*Conjunto de 8 reles 1*/
  pinMode(38, OUTPUT);
  pinMode(40, OUTPUT);
  pinMode(42, OUTPUT);
  pinMode(44, OUTPUT);
  pinMode(46, OUTPUT);
  pinMode(48, OUTPUT);
  pinMode(50, OUTPUT);
  pinMode(52, OUTPUT);

  pinMode(37, OUTPUT); //VIN Fuente 2 (5 voltios)

  /*Conjunto de 8 reles 2*/
  pinMode(39, OUTPUT);
  pinMode(41, OUTPUT);
  pinMode(43, OUTPUT);
  pinMode(45, OUTPUT);
  pinMode(47, OUTPUT);
  pinMode(49, OUTPUT);
  pinMode(51, OUTPUT);
  pinMode(53, OUTPUT);

  /*Apaga todos los actuadores*/
  /*Conjunto de 8 reles 1*/
  digitalWrite(39, HIGH);
  digitalWrite(41, HIGH);
  digitalWrite(43, HIGH);
  digitalWrite(45, HIGH);
  digitalWrite(47, HIGH);
  digitalWrite(49, HIGH);
  digitalWrite(51, HIGH);
  digitalWrite(53, HIGH);

  /*Conjunto de 8 reles 2*/
  digitalWrite(38, HIGH);
  digitalWrite(40, HIGH);
  digitalWrite(42, HIGH);
  digitalWrite(44, HIGH);
  digitalWrite(46, HIGH);
  digitalWrite(48, HIGH);
  digitalWrite(50, HIGH);
  digitalWrite(52, HIGH);


  /*DECLARACION DE LOS PINES PARA CONTROL DE LOS ACTUADORES PARA UN MEGA*/
  pinMode(20, OUTPUT);
  pinMode(22, OUTPUT);
  pinMode(24, OUTPUT);

  pinMode(26, OUTPUT);
  pinMode(28, OUTPUT);
  pinMode(30, OUTPUT);

  pinMode(32, OUTPUT);

  /*Declaracion de los pines para los estados de modulo UG95*/
  pinMode(Pin_STATUS, INPUT);
  pinMode(10, OUTPUT); //apagado
  gsm.SetPowerKeyPin(11); /*Configura el pin 11 para encender el modulo*/

  lcd.begin(84, 48);
  Serial.begin(115200);
  Serial1.begin(9600);
  mySerial2.begin(9600);
  mySerial3.begin(9600);

  Wire.begin();


  //mySerial.begin(9600);

  Serial.begin(9600);

  /* ------------------ Configuracion inicial Modulo 3G -------------------- */
  gsm.begin(&mySerial, 9600); /*configura los puertos 12 y 13 para comunicacion serial aun baudrate de 9600*/
  gsm.Event_debug = debug;
  Serial.println(F("Modulo 3G Inicializando.."));
  gsm.PowerOn(); /*Enciende el modulo UG95*/

  while (gsm.WaitReady()) {} /*Espera mientras que el modulo se enciende y se detecta un sim*/
  delay(500);
  Serial.print(F("GetOperator --> "));
  Serial.println(gsm.GetOperator());/*Imprime en pantalla el operador de la red*/
  Serial.print(F("SignalQuality --> "));
  Serial.println(gsm.SignalQuality());/*Imprime en pantalla la calidad de la señal*/

  /* -------- Configuracion inicial para conectarse a internet ------------- */
  Serial.println(F("Disconnect net"));
  net.DisConnect(); /*Se desconecta de la red en caso de estar conectado*/
  Serial.println(F("Set APN and Password"));
  net.Configure(APN, USER, PASS);  /*Se ingresa el usuario de la red y la clave dado el operador*/
  Serial.println(F("Connect net"));
  net.Connect();/*Se intenta conectar a la red para obtener datos*/
  Serial.println(F("Show My IP"));
  Serial.println(net.GetIP());/*Imprime en consola la ip dada por el operador para navegar por internet*/

  /* ----------------- Conexion con el servidor Firebase ------------------ */
  firebase.begin(FIREBASE_URL, FIREBASE_SECRET); /*Se configura la conexion con el servidor*/
  int ret = firebase.connect(); /*Se intenta establecer una conexion con el servidor*/
  if (ret == 1)
  {
    Serial.println("Conectado con el servidor");
  } else {
    Serial.println("No se pudo conectar con el servidor");
  }
  firebase.close(); /*Termina la conexion con el servidor*/
  previousMillis =  millis();
}



void loop()
{
  unsigned long currentMillis = millis();

  /** Comunicacion entre microcontroladores (Comunicacion y Control) */
  // Lectura de datos via serial
  while (!recibiendo) {
    if ( Serial1.available() > 0) {
      String dato = Serial1.readStringUntil('\r');
      if (dato == "\nh1") {
        empezo = true;
        hum1 = Serial1.readStringUntil('\r').toFloat();
      }
      if (dato == "\nh2") {
        hum2 = Serial1.readStringUntil('\r').toFloat();
      }
      if (dato == "\nh3") {
        hum3 = Serial1.readStringUntil('\r').toFloat();
      }
      if (dato == "\nh4") {
        hum4 = Serial1.readStringUntil('\r').toFloat();
      }

      if (dato == "\nta1") {
        temp1 = Serial1.readStringUntil('\r').toFloat();
      }

      if (dato == "\nt2") {
        temp2 = Serial1.readStringUntil('\r').toFloat();
      }

      if (dato == "\nt3") {
        temp3 = Serial1.readStringUntil('\r').toFloat();
      }

      if (dato == "\neat") {
        estadoActuadores = Serial1.readStringUntil('\r').toInt();
  //      Serial.println("EmpiezaAAAAAAA");
  //Serial.println("CONTROLAAAAAAAAAA");
  //Serial.println(estadoActuadores);
      }

      if (dato == "\nt4") {
        temp4 = Serial1.readStringUntil('\r').toInt();
        if (empezo) {
          recibiendo = true;
          empezo = false;
        }
      }
    }
  }
  /** Envio de datos actuadores a control */
  Serial1.println("Empieza");
  Serial1.println("CONTROL");
  Serial1.println(controlManual);
  Serial1.println("A1");
  Serial1.println(calefactorA);
  Serial1.println("A2");
  Serial1.println(calefactorB);
  Serial1.println("A3");
  Serial1.println(estractor);
  Serial1.println("A4");
  Serial1.println(humedificador);
  Serial1.println("S1");
  Serial1.println(setPoints);
  Serial1.println("A5");
  Serial1.println("1");
  Serial1.println("A6");
  Serial1.println("1");
  Serial1.println("A7");
  Serial1.println("1");
  Serial1.println("A8");
  Serial1.println("1");

  //Serial.print("  ");

  recibiendo = false;
  Serial.print("hum1 = " );
  Serial.println(hum1);
  Serial.print("temp1 = " );
  Serial.println(temp1);


  if (currentMillis - previousMillis >= interval)
  {


    int ret = firebase.connect();
    if (ret == 1)
    {
      Serial.println("CONECTADO AL SERVIDOR");

      if (currentMillis - previousMillis2 >= interval2)
      {
        contador = firebase.getInt("Galpones/" + IdentificadorGalpon + "/contador");
        delay(300);
        /*Si el contador es igual a cero vuelve a verificar para reducir errores.*/
        if (contador == 0) {
          contador = firebase.getInt("Galpones/" + IdentificadorGalpon + "/contador");
          delay(300);
        }

        /*Algoritmo para obtener la hora desde firebase*/
        fecha_original_firebase = firebase.getTime();
        delay(300);

        /*La hora se obtiene desde el servidor en el siguiente formato:                  */
        /*                     Date: Sun, 01 Mar 2020 05:18:43 GMT                       */
        /*Dado que la hora recibida esta en formato GMT es necesario restar 5 horas para */
        /*adaptarla a la hora local de Colombia. El formato original es un String con 32 */
        /*caracteres. Pero solo es necesario modificar los carecteres 23 y/o 24 dado que */
        /*es en los que se encuentra la hora                                             */
        string_con_la_fecha = "";
        for (int i = 11; i < 32; i++) {
          if (i != 23) {
            /*Se guarda en un nuevo string el string original hasta llegar al caracter 23*/
            string_con_la_fecha = string_con_la_fecha + String(fecha_original_firebase[i]);
          } else {
            /*Apartir del caracter 23 busca la hora y le resta la diferencia de 5.*/
            int hora = String(String(fecha_original_firebase[i]) + String(fecha_original_firebase[i + 1])).toInt(); /*Obtiene la hora de la fecha*/
            if ((hora - 5) < 0) {/*Si la hora da negativa se le suma adiciona un dia de mas*/
              int dia = String(String(fecha_original_firebase[11]) + String(fecha_original_firebase[12])).toInt(); /*Obtiene el dia de la fecha*/
              hora = (hora - 5) + 24;
              if ((dia - 1) <= 0) {
                dia = 1;
              } else {
                dia = dia - 1;
              }
              /*Si el dia es menor a 9 se le adiciona un 0 a la izquierda para mantener*/
              /*el formato de dos digitos y se reinicia el string.                      */
              if (dia > 9) {
                string_con_la_fecha = "" + String(dia);
              } else {
                string_con_la_fecha = "0" + String(dia);
              }
              for (int i = 13; i < 23; i++) {/*Se vuelve a guardar los caracteres desde el 13 hasta el 23*/
                string_con_la_fecha = string_con_la_fecha + String(fecha_original_firebase[i]);
              }
            } else {
              hora = hora - 5;
            }
            string_con_la_fecha = string_con_la_fecha + String(hora);
            i++;
          }
          Serial.println("HORA LOCAL ES >>>>>>>>>>>>>>>>>>> = " + string_con_la_fecha);
        }
        String aa = String("fecha:" + fecha_original_firebase + "finFeccha");



        /* --------- Enviar los datos de los sensores al servidor  -------------- */
        Serial.println("HORA LOCAL ES = " + fecha_original_firebase);
        delay(300);
        firebase.setFloat("Galpones/" + IdentificadorGalpon + "/SensorHum1/" + String(contador) + "/val", hum1);
        delay(300);
        firebase.setStr("Galpones/" + IdentificadorGalpon + "/SensorHum1/" + String(contador) + "/time", string_con_la_fecha);
        delay(300);
        firebase.setFloat("Galpones/" + IdentificadorGalpon + "/SensorHum2/" + String(contador) + "/val", hum2);
        delay(300);
        firebase.setStr("Galpones/" + IdentificadorGalpon + "/SensorHum2/" + String(contador) + "/time", string_con_la_fecha);
        delay(300);
        firebase.setFloat("Galpones/" + IdentificadorGalpon + "/SensorHum3/" + String(contador) + "/val", hum3);
        delay(300);
        firebase.setStr("Galpones/" + IdentificadorGalpon + "/SensorHum3/" + String(contador) + "/time", string_con_la_fecha);
        delay(300);
        firebase.setFloat("Galpones/" + IdentificadorGalpon + "/SensorTemp1/" + String(contador) + "/val", temp1);
        delay(300);
        firebase.setStr("Galpones/" + IdentificadorGalpon + "/SensorTemp1/" + String(contador) + "/time", string_con_la_fecha);
        delay(300);
        firebase.setFloat("Galpones/" + IdentificadorGalpon + "/SensorTemp2/" + String(contador) + "/val", temp2);
        delay(300);
        firebase.setStr("Galpones/" + IdentificadorGalpon + "/SensorTemp2/" + String(contador) + "/time", string_con_la_fecha);
        delay(300);
        firebase.setFloat("Galpones/" + IdentificadorGalpon + "/SensorTemp3/" + String(contador) + "/val", temp3);
        delay(300);
        firebase.setStr("Galpones/" + IdentificadorGalpon + "/SensorTemp3/" + String(contador) + "/time", string_con_la_fecha);
        delay(300);
        contador++;
        firebase.setInt("Galpones/" + IdentificadorGalpon + "/contador", contador);
        mySerial2.println("contadorAA");
        mySerial2.println(contador);
        delay(300);
        previousMillis2 = currentMillis;
      }

      if (currentMillis - previousMillis3 >= interval3)
      {
        /*Algoritmo para obtener la hora desde firebase*/
        fecha_original_firebase = firebase.getTime();
        delay(300);

        /*La hora se obtiene desde el servidor en el siguiente formato:                  */
        /*                     Date: Sun, 01 Mar 2020 05:18:43 GMT                       */
        /*Dado que la hora recibida esta en formato GMT es necesario restar 5 horas para */
        /*adaptarla a la hora local de Colombia. El formato original es un String con 32 */
        /*caracteres. Pero solo es necesario modificar los carecteres 23 y/o 24 dado que */
        /*es en los que se encuentra la hora                                             */
        string_con_la_fecha = "";
        for (int i = 11; i < 32; i++) {
          if (i != 23) {
            /*Se guarda en un nuevo string el string original hasta llegar al caracter 23*/
            string_con_la_fecha = string_con_la_fecha + String(fecha_original_firebase[i]);
          } else {
            /*Apartir del caracter 23 busca la hora y le resta la diferencia de 5.*/
            int hora = String(String(fecha_original_firebase[i]) + String(fecha_original_firebase[i + 1])).toInt(); /*Obtiene la hora de la fecha*/
            if ((hora - 5) < 0) {/*Si la hora da negativa se le suma adiciona un dia de mas*/
              int dia = String(String(fecha_original_firebase[11]) + String(fecha_original_firebase[12])).toInt(); /*Obtiene el dia de la fecha*/
              hora = (hora - 5) + 24;
              if ((dia - 1) <= 0) {
                dia = 1;
              } else {
                dia = dia - 1;
              }
              /*Si el dia es menor a 9 se le adiciona un 0 a la izquierda para mantener*/
              /*el formato de dos digitos y se reinicia el string.                      */
              if (dia > 9) {
                string_con_la_fecha = "" + String(dia);
              } else {
                string_con_la_fecha = "0" + String(dia);
              }
              for (int i = 13; i < 23; i++) {/*Se vuelve a guardar los caracteres desde el 13 hasta el 23*/
                string_con_la_fecha = string_con_la_fecha + String(fecha_original_firebase[i]);
              }
            } else {
              hora = hora - 5;
            }
            string_con_la_fecha = string_con_la_fecha + String(hora);
            i++;
          }
          Serial.println("HORA LOCAL ES >>>>>>>>>>>>>>>>>>> = " + string_con_la_fecha);
        }

        previousMillis3 = currentMillis;
        firebase.setStr("Galpones/" + IdentificadorGalpon + "/fechaUltimaConexion", string_con_la_fecha);
        delay(300);
        firebase.setStr("Galpones/" + IdentificadorGalpon + "/estadoActuadores", estadoActuadores);
        delay(300);

      }

      /* -------------+-- Lectura de los datos del servidor  ------------------ */
      /*Lee la variable de control manual*/
      controlManual = firebase.getInt("Galpones/" + IdentificadorGalpon + "/Actuadores/controlManual");
      delay(300);

      /*Lee el estado del extractor de aire 1*/
      calefactorA = firebase.getInt("Galpones/" + IdentificadorGalpon + "/Actuadores/Actuador1");
      delay(300);
      calefactorB = firebase.getInt("Galpones/" + IdentificadorGalpon + "/Actuadores/Actuador2");
      delay(300);
      estractor = firebase.getInt("Galpones/" + IdentificadorGalpon + "/Actuadores/Actuador3");
      delay(300);
      humedificador = firebase.getInt("Galpones/" + IdentificadorGalpon + "/Actuadores/Actuador4");
      delay(300);
      setPoints = firebase.get("Galpones/" + IdentificadorGalpon + "/setPoints");
      delay(300);
      setPoints.replace("\"", "");

    } else {
      Serial.println("ERROR AL CONECTAR AL SERVIDOR");
      delay(500);
    }

    firebase.close();
    previousMillis = currentMillis;

  }



  /* ----------------------- Enviar datos por serial ----------------------- */


  /*Rutina para reiniciar el modulo en caso de que no se encuentre activo*/
  if (analogRead(Pin_STATUS) <= 350) {

    /* ------------------ Configuracion inicial Modulo 3G -------------------- */
    Serial.println(F("Modulo 3G Inicializando.."));
    gsm.PowerOn(); /*Enciende el modulo UG95*/
    while (gsm.WaitReady()) {}/*Espera mientras que el modulo se enciende y se detecta un sim*/
    delay(500);
    Serial.print(F("GetOperator --> "));
    Serial.println(gsm.GetOperator());/*Imprime en pantalla el operador de la red*/
    Serial.print(F("SignalQuality --> "));
    Serial.println(gsm.SignalQuality());/*Imprime en pantalla la calidad de la señal*/

    /* -------- Configuracion inicial para conectarse a internet ------------- */
    Serial.println(F("Disconnect net"));
    net.DisConnect(); /*Se desconecta de la red en caso de estar conectado*/
    Serial.println(F("Set APN and Password"));
    net.Configure(APN, USER, PASS);  /*Se ingresa el usuario de la red y la clave dado el operador*/
    Serial.println(F("Connect net"));
    net.Connect();/*Se intenta conectar a la red para obtener datos*/
    Serial.println(F("Show My IP"));
    Serial.println(net.GetIP());/*Imprime en consola la ip dada por el operador para navegar por internet*/

    /* ----------------- Conexion con el servidor Firebase ------------------ */
    firebase.begin(FIREBASE_URL, FIREBASE_SECRET); /*Se configura la conexion con el servidor*/
    int ret = firebase.connect(); /*Se intenta establecer una conexion con el servidor*/
    if (ret == 1)
    {
      Serial.println("Conectado con el servidor");
    } else {
      Serial.println("No se pudo conectar con el servidor");
    }
    previousMillis =  millis();
  }

}

/*FN****************************************************************************

    debug( String data)

    Retorna:         Nada

    Proposito:       Imprimi el string de entrada en la consola

*******************************************************************************/

void debug(String data)
{
  Serial.println(data);
}

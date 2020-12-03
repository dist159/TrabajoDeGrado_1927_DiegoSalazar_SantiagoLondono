/* firebase *******************************************************************/
/*                                                                            */
/*                       Control de variables ambientales                     */
/*                                                                            */
/******************************************************************************/

/*******************************************************************************

    Notas:           Este codigo permite enviar y recibir informacion desde un
                     servidor de firebase.

    Registro de Revisiones:

    FECHA      RESPONSABLE  REVISION
    -----------------------------------------------------------------------

    Sep 02/20  S.Londoño    Modificacion para adaptar el sistema de comunicacion

    Sep 02/20  D.Salazar    Modificacion para adaptar el sistema de comunicacion

    Mar 09/20  S.Londoño    Creacion

    Mar 09/20  D.Salazar    Creacion

*******************************************************************************/


/* ------------------------- Declaracion de librerias -------------------------- */

#include <Wire.h>
#include "Adafruit_Si7021.h"
#include <PCD8544.h>

/* ---------------- Variables para el manejo de los actuadores y sensores ---------------- */

Adafruit_Si7021 sensor = Adafruit_Si7021();

const int ADDR = 0x70;
double temp1;
double hum1;
double temp2;
double hum2;
double temp3;
double hum3;
double temp4;
double hum4;
int Actuador1 = 10;
int Actuador2 = 9;

boolean Act1 = 1;
boolean Act2 = 1;
boolean Act3 = 1;
boolean Act4 = 1;
boolean Act5 = 1;
boolean Act6 = 1;
boolean Act7 = 1;
boolean Act8 = 1;

/** Variables del estado actual de los actuadores*/
int Act1Real = 1;
int Act2Real = 1;
int Act3Real = 1;
int Act4Real = 1;
int Act5Real = 1;
int Act6Real = 1;
int Act7Real = 1;
int Act8Real = 1;

float setPointTEMPManual = 30;
float setPointHUMManual = 65;

float setPointTEMP = setPointTEMPManual;
float setPointHUM = setPointHUMManual;
boolean controlTomado = false;
String setPoints = "nara";

void TCA9548A(uint8_t bus)
{
  Wire.beginTransmission(0x70); // TCA9548A address is 0x70
  Wire.write(1 << bus);         // send byte to select bus
  Wire.endTransmission();
  pinMode(Actuador1, OUTPUT);
  pinMode(Actuador2, OUTPUT);
}

void setup()
{
  Serial.begin(9600);
  Wire.begin();
  TCA9548A(0);
  TCA9548A(1);
  TCA9548A(2);
  TCA9548A(3);

  /*DECLARACION PINES PARA LOS 16 RELES*/
  pinMode(6, OUTPUT); // VIN fuente 1 (5 voltios)

  /*Conjunto de 8 reles 1*/
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(6, OUTPUT);

  /*Apaga todos los actuadores*/
  /*Conjunto de 8 reles 1*/
  digitalWrite(13, HIGH); // Calefactor A
  digitalWrite(12, HIGH); // Calefactor B
  digitalWrite(11, LOW);  // Estractor
  digitalWrite(10, HIGH);
  digitalWrite(9, HIGH);
  digitalWrite(8, HIGH);
  digitalWrite(7, HIGH);
  digitalWrite(6, HIGH); // VIN fuente 1 (5 voltios)
}

void loop()
{

  /** Toma de datos de cada sensor y lo almacena en una variable */

  TCA9548A(0);
  sensor.begin();
  temp1 = sensor.readTemperature();
  hum1 = sensor.readHumidity();

  delay(300);

  TCA9548A(1);
  sensor.begin();
  temp2 = sensor.readTemperature();
  hum2 = sensor.readHumidity();

  delay(300);

  TCA9548A(2);
  sensor.begin();
  temp3 = sensor.readTemperature();
  hum3 = sensor.readHumidity();

  delay(300);

  TCA9548A(3);
  sensor.begin();
  temp4 = sensor.readTemperature();
  hum4 = sensor.readHumidity();

  /** Envio de datos via serial para comunicarse con el modulo de comunicacion*/

  double a1 = temp1;
  double b1 = hum1;

  double a2 = temp2;
  double b2 = hum2;

  double a3 = temp3;
  double b3 = hum3;

  double a4 = temp4;
  double b4 = hum4;

  String SerialData1 = "";
  String SerialData2 = "";
  String SerialData3 = "";
  String SerialData4 = "";

  String SerialDataB1 = "";
  String SerialDataB2 = "";
  String SerialDataB3 = "";
  String SerialDataB4 = "";

  SerialData1 = String(a1, 4);
  SerialData2 = String(a2, 4);
  SerialData3 = String(a3, 4);
  SerialData4 = String(a4, 4);

  Serial.println("t1");
  Serial.println(SerialData1);
  Serial.println("ta1");
  Serial.println(SerialData1);
  Serial.println("t2");
  Serial.println(SerialData2);
  Serial.println("t3");
  Serial.println(SerialData3);

  String datoActuadores = "";
  if (Act1Real)
  {
    datoActuadores = "1";
  }
  else
  {
    datoActuadores = "0";
  }
  if (Act2Real)
  {
    datoActuadores += "1";
  }
  else
  {
    datoActuadores += "0";
  }
  if (Act3Real)
  {
    datoActuadores += "1";
  }
  else
  {
    datoActuadores += "0";
  }
  if (Act4Real)
  {
    datoActuadores += "1";
  }
  else
  {
    datoActuadores += "0";
  }
  if (Act5Real)
  {
    datoActuadores += "1";
  }
  else
  {
    datoActuadores += "0";
  }
  if (Act6Real)
  {
    datoActuadores += "1";
  }
  else
  {
    datoActuadores += "0";
  }
  if (Act7Real)
  {
    datoActuadores += "1";
  }
  else
  {
    datoActuadores += "0";
  }
  if (Act8Real)
  {
    datoActuadores += "1";
  }
  else
  {
    datoActuadores += "0";
  }
  Serial.println("eat");
  Serial.println(datoActuadores);

  Serial.println("t4");
  Serial.println(SerialData4);

  /** Convertir las muestras leidas en arreglo de caracteres para ser enviados al modulo de comunicacion*/
  SerialDataB1 = String(b1, 4);
  SerialDataB2 = String(b2, 4);
  SerialDataB3 = String(b3, 4);
  SerialDataB4 = String(b4, 4);

  /** Envio de cada muestra de humedad via serial con el modulo*/
  Serial.println("h1");
  Serial.println(SerialDataB1);
  Serial.println("h2");
  Serial.println(SerialDataB2);
  Serial.println("h3");
  Serial.println(SerialDataB3);
  Serial.println("h4");
  Serial.println(SerialDataB4);
  //Serial.print("  ");

  /** Lectura de datos */

  while (Serial.available() > 0)
  {
    String dato = Serial.readStringUntil('\r');
    //Serial.println(dato);
    if (dato == "\nCONTROL")
    {
      controlTomado = Serial.readStringUntil('\r').toInt();
    }
    if (dato == "\nA1")
    {
      Act1 = Serial.readStringUntil('\r').toInt();
    }
    if (dato == "\nA2")
    {
      Act2 = Serial.readStringUntil('\r').toInt();
    }
    if (dato == "\nA3")
    {
      Act3 = Serial.readStringUntil('\r').toInt();
    }
    if (dato == "\nA4")
    {
      Act4 = Serial.readStringUntil('\r').toInt();
    }
    if (dato == "\nS1")
    {
      setPoints = Serial.readStringUntil('\r');
      Serial.println(setPoints);
    }
    if (dato == "\nA5")
    {
      Act5 = Serial.readStringUntil('\r').toInt();
    }

    if (dato == "\nA6")
    {
      Act6 = Serial.readStringUntil('\r').toInt();
    }

    if (dato == "\nA7")
    {
      Act7 = Serial.readStringUntil('\r').toInt();
    }

    if (dato == "\nA8")
    {
      Act8 = Serial.readStringUntil('\r').toInt();
    }
  }

  if (setPoints.length() == 6)
  {
    if (setPoints.charAt(1) == '1')
    {
      String a = "";
      String temp = a + setPoints.charAt(2) + setPoints.charAt(3);
      String b = "";
      String hum = b + setPoints.charAt(4) + setPoints.charAt(5);
      setPointTEMP = temp.toInt();
      setPointHUM = hum.toInt();
    }
  }

  /** SISTEMA DE CONTROL */
  /** SISTEMA LOCAL AUTOMATICO*/
  if (!controlTomado)
  {
    if (a1 < setPointTEMP)
    {
      Act1Real = 0;
      Act3Real = 1;
      digitalWrite(13, 0); // Calefactor A 1 ON
      digitalWrite(11, 1); // Estractor ON
    }
    else
    {
      Act1Real = 1;
      digitalWrite(13, 1); // Calefactor A 1 OFF
      if (a2 < setPointTEMP)
      {
        Act3Real = 1;
        digitalWrite(11, 1); // Estractor ON
      }
      else
      {
        Act3Real = 0;
        digitalWrite(11, 0); // Estractor ON
      }
    }
    if (a2 < setPointTEMP)
    {
      Act2Real = 0;
      Act3Real = 1;
      digitalWrite(12, 0); // Calefactor B
      digitalWrite(11, 1); // Estractor ON
    }
    else
    {
      Act2Real = 1;
      digitalWrite(12, 1); // Calefactor B OFF
      if (a1 < setPointTEMP)
      {
        Act3Real = 1;
        digitalWrite(11, 1); // Estractor ON
      }
      else
      {
        Act3Real = 0;
        digitalWrite(11, 0); // Estractor ON
      }

      //Control Humedad
      if (((b1 + b2) / 2) < setPointHUM)
      {
        Act4Real = 0;
        digitalWrite(10, 0); // Humidisador ON
      }
      else
      {
        Act4Real = 1;
        digitalWrite(10, 1); // Humidisador OFF
      }
    }
  }
  else
  {
    /** SISTEMA ONLINE*/
    Act1Real = Act1;
    Act2Real = Act2;
    Act3Real = Act3;
    Act4Real = Act4;
    Act5Real = Act5;
    Act6Real = Act6;
    Act7Real = Act7;
    Act8Real = Act8;
    digitalWrite(13, Act1); // Calefactor A
    digitalWrite(12, Act2); // Calefactor B
    digitalWrite(11, Act3); // ESTRACTOR
    digitalWrite(10, Act4); // ESTRACTOR
    digitalWrite(9, Act5); // Calefactor A
    digitalWrite(8, Act6); // Calefactor B
    digitalWrite(7, Act7); // ESTRACTOR
    digitalWrite(6, Act8); // ESTRACTOR
  }


/** Imprimir en consola los datos para ser verificados manualmente*/
  Serial.print("CONTROL:");
  Serial.println(controlTomado);
  Serial.print("Acti1:");
  Serial.println(Act1);
  Serial.print("Acti2:");
  Serial.println(Act2);
  Serial.print("Acti3:");
  Serial.println(Act3);
  Serial.print("Acti4:");
  Serial.println(Act4);
  Serial.print("Acti5:");
  Serial.println(Act5);
  Serial.print("Acti6:");
  Serial.println(Act6);
  Serial.print("Acti7:");
  Serial.println(Act7);
  Serial.println(setPoints);
}

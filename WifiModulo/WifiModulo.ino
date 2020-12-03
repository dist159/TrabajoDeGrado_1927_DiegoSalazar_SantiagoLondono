/* ModuloWifi *****************************************************************/
/*                                                                            */
/*                        Modulo wifi backup No                               */
/*                                                                            */
/******************************************************************************/

/*******************************************************************************

    Notas:           Este codigo controla el modulo WIFI esp8266. Permite que se
                     conecte a un servidor de firebase y puede recibir y enviar
                     datos al servidor. Como funcion principal habilitara un pin
                     cada 11000000 milisegundos reiniciando el modulo conectado
                     a dicho pin. Tambien habilitara el mismo pin por medio de
                     un comando dado desde el servidor.


    Registro de Revisiones:

    FECHA      RESPONSABLE  REVISION
    -----------------------------------------------------------------------
    Mar 09/17  S.Londoño    Implementacion original

    Mar 09/17  D.Salazar    Implementacion original


*******************************************************************************/

/* Librerias */
#include <ESP8266WiFi.h>
#include<FirebaseArduino.h>

/* Parametro de configuracion */
#define FIREBASE_HOST "goldenchicken-6d6f4.firebaseio.com"             /* Firebase server URL              */
#define FIREBASE_AUTH "YqdcKUdBv3oJxqSRX7v7RRJ8oPGIkvgD8gfbkpYR"       /* Firebase security code           */
#define WIFI_SSID "4G-CPE-23FC"                                        /* Nombre de la red Wifi a conectar */
#define WIFI_PASSWORD "12345678"                                       /* Contraseña de la red             */
unsigned long previousMillis = 0;

/* Intervalo de reinicio */
const long interval = 11000000;

int val1;
int val2;
char mystr1[9];
char mystr2[9];
char prueba[1];
int ia = 0;
String ppp = "";
int contador1 = 0;
int contador2 = 0;

void setup()
{
  Serial.begin(115200);
  pinMode(2, OUTPUT);                           /* El pin de salido es el pin 2   */
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);         /* Se intenta conectar con la red */
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected:");
  Serial.println(WiFi.localIP());
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  delay(1000);

}

/*FN****************************************************************************
*
*   firebasereconnect( )
*
*   Retorna:         Nada
*
*   Proposito:       Intenta conectarse al servidor de firebase.
*
*******************************************************************************/

void firebasereconnect()
{
  Serial.println("Trying to reconnect");
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop()
{

  /* Si la conexion falla, intena volver a conectar con el servidor */
  if (Firebase.failed())
  {
    Serial.print("setting number failed:");
    Serial.println(Firebase.error());
    firebasereconnect();
    delay(5000);
  }

  /* Obtiene el parametro desde el servidor para reinicio manual*/
  ppp = Firebase.getString("reiniciar");
  delay(3000);
  Serial.println(ppp);
  if (ppp == "aa") {
    digitalWrite(2, HIGH);
    delay(10000);
    digitalWrite(2, LOW);
    delay(10000);
    Firebase.setString("reiniciar", "ab");
    delay(3000);
  } else {
    digitalWrite(2, HIGH);
  }
  if (Firebase.failed()) {
    Serial.print("setting /message failed:");
    Serial.println(Firebase.error());
    return;
  }

  /* Si se cumple el tiempo, se habilita el pin para reiniciar el modulo */
  /* el pin estara en bajo por al menos 10 segundos y luego volver a su  */
  /* estado normal.                                                      */
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    contador2 = contador1;
    if (contador1 == contador2) {
      digitalWrite(2, LOW);
      delay(10000);
      digitalWrite(2, HIGH);
      delay(10000);
    } else {
      digitalWrite(2, HIGH);
    }
  }
  delay(3000);
}

/* TEE_UC20 *******************************************************************/
/*                                                                            */
/*                        Libreria de TEE_UC20                                */
/*                                                                            */
/******************************************************************************/

/*******************************************************************************

    Notas:           Este codigo se encarga del funcionamiento del modulo UG95
                     Permite comunicarlo con un servidor de firebase al enviar
                     y recibir informacion por medio de la red celular 3G.

    Registro de Revisiones:

    FECHA      RESPONSABLE  REVISION
    -----------------------------------------------------------------------
    Mar 09/20  S.Londoño    Modificacion para adaptarlo al modulo ug95

    Mar 09/20  D.Salazar    Modificacion para adaptarlo al modulo ug95

	Mar 09/17  Thaieasyelec Implementacion original


*******************************************************************************/

/* ------------------------- Declaracion de librerias -------------------------- */

#include "TEE_UC20.h"
#include "internet.h"
#include "firebase.h"

/* ---------------- Variables para configurar la red celular ---------------- */

//SIM TRUE  internet
#define APN "Internet.comcel.com.co"
#define USER ""
#define PASS ""
#define FIREBASE_URL "goldenchicken-6d6f4.firebaseio.com"
#define FIREBASE_SECRET "YqdcKUdBv3oJxqSRX7v7RRJ8oPGIkvgD8gfbkpYR"
int START_PIN = 5;
UC20 gsm;
bool yaPaso = false;
unsigned long previousMillis_timeout = 0;
int contApagado = 0;
INTERNET neta;
FIREBASE firebasea;
void event_null(String data) {}
UC20::UC20()
{
	Event_debug = event_null;
}
void UC20::begin(SoftwareSerial *serial, long baud)
{
	serial->begin(baud);
	_Serial = serial;
}

void UC20::begin(HardwareSerial *serial, long baud)
{
	serial->begin(baud);
	_Serial = serial;
}
#if ATLSOFTSERIAL
void UC20::begin(AltSoftSerial *serial, long baud)
{
	serial->begin(baud);
	_Serial = serial;
}
#endif
void UC20::debug(String data)
{
	(*Event_debug)(data);
}

void UC20::SetPowerKeyPin(int pin)
{
	START_PIN = pin;
}
bool UC20::PowerOn()
{
	String req = "";
	_Serial->println(F("AT"));

	unsigned long pv_out = millis();

	while (1)
	{

		if (_Serial->available())
		{
			debug(F("Se detecto conexion con el modulo 3G"));
			req = _Serial->readStringUntil('\n');
			debug(req);
			debug(String(req.indexOf(F("RDY"))));
			if (req.indexOf(F("RDY")) != -1)
			{
				String a = "NumAA: " + String(analogRead(15));
				debug(a);
				start_time_out();
				debug(F("Power ON a"));
				yaPaso = true;
				return (true);
			}
		}
		unsigned long current_out = millis();
		//debug("x");
		if (current_out - pv_out >= (5000))
		{

			digitalWrite(START_PIN, HIGH);
			delay(300);
			digitalWrite(START_PIN, LOW);
			delay(300);
			debug(F("Power Retry"));
			debug(F("PRe..."));
			pv_out = current_out;
			debug(F("Pin actual es"));
			String a = "Num: " + String(analogRead(15));
			debug(a);

			if (analogRead(15) >= 330)
			{
				contApagado++;
				_Serial->println(F("AT+QPOWD=0"));
				debug(F("Esta prendido"));

				if (contApagado >= 5)
				{
					contApagado = 0;
					debug(F("Apagado de Emergencia iniciado"));
					digitalWrite(10, HIGH);
					delay(300);
					digitalWrite(10, LOW);
					delay(2000);
				}
			}
			else
			{
				yaPaso = false;
				debug(F("Esta Apagado"));
			}
		}
	}
}

void UC20::Reiniciar()
{
	gsm.debug(F("Apagando y Reiniciando..."));
	_Serial->println(F("AT+QPOWD=0"));
	delay(5000);
	if (analogRead(15) >= 330)
	{
		debug(F("Apagado de Emergencia iniciado"));
		digitalWrite(10, HIGH);
		delay(300);
		digitalWrite(10, LOW);
		delay(300);
	}
	delay(2000);

	gsm.debug(F("Power OFF: Reiniciando"));

	Serial.println(F("Modulo 3G Inicializando..."));
	gsm.PowerOn();
	while (gsm.WaitReady())
	{
	}
	delay(500);
	Serial.print(F("GetOperator --> "));
	Serial.println(gsm.GetOperator());
	Serial.print(F("SignalQuality --> "));
	Serial.println(gsm.SignalQuality());
	Serial.println(F("Disconnect net"));
	neta.DisConnect();
	Serial.println(F("Set APN and Password"));
	neta.Configure(APN, USER, PASS);
	Serial.println(F("Connect net"));
	neta.Connect();
	Serial.println(F("Show My IP"));
	Serial.println(neta.GetIP());
	firebasea.begin(FIREBASE_URL, FIREBASE_SECRET);
	int ret = firebasea.connect();
	if (ret == 1)
	{
		Serial.println("Eliminar LED");
		firebasea.remove("LED");
		delay(300);
		Serial.println("Poner LED en 9872");
		firebasea.setInt("LED", 9872);
		delay(300);
	}
}
bool UC20::PowerOff()
{

	pinMode(START_PIN, OUTPUT);
	digitalWrite(START_PIN, HIGH);
	delay(500);
	digitalWrite(START_PIN, LOW);
	delay(500);
	while (!_Serial->available())
	{
		delay(1);
	}
	while (1)
	{
		String req = _Serial->readStringUntil('\n');
		//debug(req);
		if (req.indexOf(F("RDY")) != -1)
		{
			debug(F("Power ON"));
			pinMode(START_PIN, OUTPUT);
			digitalWrite(START_PIN, HIGH);
			delay(500);
			digitalWrite(START_PIN, LOW);
			delay(500);
		}
		if (req.indexOf(F("POWERED DOWN")) != -1)
		{
			debug(F("Power OFF"));
			return (true);
		}
		if (analogRead(15) <= 50)
		{
			debug(F("Power OFF: Reiniciando"));
			digitalWrite(START_PIN, HIGH);
			delay(500);
			digitalWrite(START_PIN, LOW);
			delay(500);
			PowerOn();
			return (true);
		}
	}
}
bool UC20::WaitReady()
{
	start_time_out();
	//debug("Esperado...");
	while (_Serial->available())
	{

		String req = _Serial->readStringUntil('\n');
		debug(req);
		debug("esperando...");
		if (req.indexOf(F("+CPIN: READY")) != -1)
		{
			debug(F("\r\nUC20 Ready..."));
			debug(F("\r\nClose Echo"));
			_Serial->println(F("AT+CREG=1"));
			String reqab = _Serial->readStringUntil('\n');
			debug(reqab);

			int conectadoAred = 1;
			while (conectadoAred)
			{
				String reqabr = _Serial->readStringUntil('\n');
				if (reqabr.indexOf(F("1")) != -1)
				{
					conectadoAred = 0;
					debug("Conectado a una red con EXITO!");
					_Serial->println(F("AT+COPS?"));
					String reqabr1 = _Serial->readStringUntil('\n');
					debug(reqabr1);
				}
				else
				{
					debug("Conectandose a una red...");

					if (analogRead(15) <= 50)
					{
						debug(F("Power OFF: Reiniciando"));
						digitalWrite(START_PIN, HIGH);
						delay(500);
						digitalWrite(START_PIN, LOW);
						delay(500);
						PowerOn();
						return (true);
					}
				}
			}
			return (false);
		}
		else if (analogRead(15) <= 50)
		{
			digitalWrite(START_PIN, HIGH);
			delay(500);
			digitalWrite(START_PIN, LOW);
			delay(500);
			debug("Intentando ON...");
			PowerOn();
		}
		else
		{
			return (true);
		}
		if (time_out(30000))
		{
			debug(F("\r\nNo response--> Please check Hardware"));
		}
	}
	return (true);
}
String UC20::GetOperator()
{
	_Serial->println(F("AT+COPS?"));
	while (!_Serial->available())
	{
	}
	start_time_out();
	while (1)
	{
		String req = _Serial->readStringUntil('\n');
		if (req.indexOf(F("+COPS")) != -1)
		{
			//+COPS: 0,0,"TRUE-H",2
			/*char comma1 = req.indexOf(F(","));
			char comma2 = req.indexOf(F(","),comma1+1);
			char comma3 = req.indexOf(F(","),comma2+1);
			String  operate_name = req.substring(comma2+2,comma3-1);
			String  acc_tech = req.substring(comma3+1);
			return(operate_name + "," + acc_tech);
			*/
			return (req.substring(req.indexOf(F("\""))));
		}
		if (time_out(3000))
		{
			return (F(""));
		}
	}
	return (F(""));
}
unsigned char UC20::SignalQuality()
{
	unsigned char ret = 101;
	_Serial->println(F("AT+CSQ"));
	while (!_Serial->available())
	{
	}
	start_time_out();
	while (1)
	{
		String req = _Serial->readStringUntil('\n');
		if (req.indexOf(F("+CSQ")) != -1)
		{
			ret = req.substring(req.indexOf(F(" ")) + 1, req.indexOf(F(","))).toInt();
			return (ret);
		}
		if (time_out(3000))
		{
			return (ret);
		}
	}
	return (ret);
}
void UC20::start_time_out()
{
	previousMillis_timeout = millis();
}
bool UC20::time_out(long timeout_interval)
{
	unsigned long currentMillis = millis();
	if (currentMillis - previousMillis_timeout >= timeout_interval)
	{
		previousMillis_timeout = currentMillis;
		return (true);
	}
	return (false);
}
bool UC20::wait_ok(long time)
{
	return wait_ok_(time, true);
}
bool UC20::wait_ok_ndb(long time)
{
	return wait_ok_(time, false);
}

bool UC20::wait_ok_(long time, bool ack)
{
	unsigned long previousMillis = millis();
	while (1)
	{
		String req = _Serial->readStringUntil('\n');
		if (req.indexOf(F("OK")) != -1)
		{
			if (ack)
				debug(F("OK"));
			return (1);
		}
		if (req.indexOf(F("ERROR")) != -1)
		{
			if (ack)
				debug(F("Error"));
			return (0);
		}
		//debug(req);
		unsigned long currentMillis = millis();
		if (currentMillis - previousMillis >= time)
		{
			previousMillis = currentMillis;
			if (ack)
				debug(F("Error"));
			return (0);
		}
	}
}

unsigned char UC20::event_input()
{
	while (_Serial->available())
	{
		String req = _Serial->readStringUntil('\n');

		if (req.indexOf(F("RING")) != -1)
		{
			event_type = EVENT_RING;
			return (EVENT_RING); //EVENT_RING
		}
		else if (req.indexOf(F("+CMTI: \"ME\"")) != -1)
		{
			event_type = EVENT_SMS;
			char index = req.indexOf(F(","));
			index_new_SMS = req.substring(index + 1).toInt();

			return (EVENT_SMS); //EVENT_SMS
		}
	}
	event_type = EVENT_NULL;
	return (EVENT_NULL); //EVENT_NULL
}

/* Code Serial */
String UC20::readStringUntil(char data)
{
	return _Serial->readStringUntil(data);
}
size_t UC20::print(String data)
{
	return _Serial->print(data);
}
size_t UC20::println(String data)
{
	return _Serial->println(data);
}

void UC20::print(unsigned char data, int type)
{
	_Serial->print(data, type);
}

void UC20::print(int data, int type)
{
	_Serial->print(data, type);
}
void UC20::print(unsigned int data, int type)
{
	_Serial->print(data, type);
}
void UC20::print(long data, int type)
{
	_Serial->print(data, type);
}

size_t UC20::print(String data, int type)
{
	int i = 0;
	while (data[i])
	{
		_Serial->print(data[i], type);
		i++;
	}
	return (i - 1);

	// Serial.print(data,type);
	// return _Serial->print(data,type);
}
size_t UC20::println(String data, int type)
{
	int i = 0;
	while (data[i])
	{
		_Serial->print(data[i], type);
		i++;
	}
	_Serial->println("");
	return (i + 1);

	//return _Serial->println(data,type);
}

int UC20::peek()
{
	return _Serial->peek();
}
size_t UC20::write(uint8_t byte)
{
	return _Serial->write(byte);
}
int UC20::read()
{
	return _Serial->read();
}
int UC20::available()
{
	return _Serial->available();
}
void UC20::flush()
{
	_Serial->flush();
}

void UC20 ::my_flush()
{
	while (gsm.available())
	{
		gsm.read();
	}
}

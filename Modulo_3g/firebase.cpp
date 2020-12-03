/* firebase *******************************************************************/
/*                                                                            */
/*                        Libreria de firebase                                */
/*                                                                            */
/******************************************************************************/

/*******************************************************************************

    Notas:           Este codigo permite enviar y recibir informacion desde un
                     servidor de firebase.

    Registro de Revisiones:

    FECHA      RESPONSABLE  REVISION
    -----------------------------------------------------------------------
    Mar 09/20  S.Londoño    Modificacion para adaptarlo al modulo ug95

    Mar 09/20  D.Salazar    Modificacion para adaptarlo al modulo ug95

    Mar 09/17  Thaieasyelec Implementacion original


*******************************************************************************/

/* ------------------------- Declaracion de librerias -------------------------- */

#include "firebase.h"

/* ---------------- Variables para configurar la red celular ---------------- */

SSL fb_ssl;
//TEE_UC20 modulo;
unsigned char flag_error = 1;
FIREBASE ::FIREBASE()
{
}

bool FIREBASE ::begin(String host, String auth)
{
	int ret = 0;

	host_ = host;
	auth_ = auth;
	gsm.my_flush();
	gsm.my_flush();
	gsm.my_flush();

	ret = fb_ssl.sslversion(CONTEX, 1);
	if (ret == 1)
	{
		gsm.debug(F("sslver=  = OK"));
		ret = fb_ssl.ciphersuite(CONTEX, "0xFFFF");
		if (ret == 1)
		{
			gsm.debug(F("ciphersuite=  = OK"));
			ret = fb_ssl.seclevel(CONTEX, 0);
			if (ret == 1)
			{
				gsm.debug(F("seclevel=  = OK"));
				return (true);
			}
			else
			{
				gsm.debug(F("seclevel=  = Error"));
				return (false);
			}
		}
		else
		{
			gsm.debug(F("ciphersuite=  = Error"));
			return (false);
		}
	}
	else
	{
		gsm.debug(F("sslver = Error"));
		return (false);
	}
}

int FIREBASE ::connect()
{
	return fb_ssl.open(1, CONTEX, CLI_ID, host_, F("443"), 0);
}

bool FIREBASE ::set(String thing, String data)
{
	if (fb_ssl.startSend(CLI_ID, 0))
	{
		flag_error = 0;
		send_http("PUT", thing, data);
		fb_ssl.stopSend();
		fb_ssl.waitRead(10000);
		int len = fb_ssl.read(CLI_ID);
		while (len)
		{
			if (gsm.available())
			{
				String req = gsm.readStringUntil('\n');
				//Serial.println(req);
				if (req.indexOf(F("OK")) != -1)
				{
					len = 0;
				}
			}
		}
	}
	else
	{
		flag_error = 1;
		gsm.debug(F("ERROR al enviar: No se logro comunicar con el servidor"));
			//gsm.Reiniciar();
		return (false);
	}
}

bool FIREBASE ::setStr(String thing, String data)
{
	data = "\"" + data + "\"";
	return set(thing, String(data));
}

bool FIREBASE ::setInt(String thing, int data)
{
	return set(thing, String(data));
}

bool FIREBASE ::setFloat(String thing, float data)
{
	return set(thing, String(data));
}

void FIREBASE ::send_http(String http_type, String thing, String data)
{
	String out = http_type + " /" + thing + ".json?auth=" + auth_ + " HTTP/1.1";
	gsm.println(out);
	out = "Host: " + host_ + ":443";
	gsm.println(out);
	gsm.println(F("User-Agent: UC20_3G"));
	if ((http_type == "GET") || (http_type == "DELETE"))
		gsm.println(F("Connection: keep-alive"));
	//else
	//gsm.println(F("Connection: close"));
	gsm.println(F("Accept-Encoding: identity;q=1,chunked;q=0.1,*;q=0"));
	if (http_type != "GET")
	{
		gsm.print(F("Content-Length: "));
		gsm.println(String(data.length()));
		gsm.println("");
		gsm.println(data);
		gsm.println("");
	}
	else
	{
		gsm.println("");
	}
}

String FIREBASE ::get(String thing)
{

	if (fb_ssl.startSend(CLI_ID, 0))
	{
		flag_error = 0;
		send_http("GET", thing, "");
		fb_ssl.stopSend();
		fb_ssl.waitRead(5000);

		int len = fb_ssl.read(CLI_ID);
		//Serial.println(len);
		char flag = 0;
		String data;
		char c_pv = 0;
		while (len)
		{
			if (gsm.available())
			{
				char c = gsm.read();
				if ((c == 0x0D) && (c_pv == 0x0A))
					flag++;
				if (flag == 1)
				{
					if ((c != 0x0A) && (c != 0x0D) && (c_pv != '\"'))
						data += c;
				}
				c_pv = c;
				len--;
			}
		}
		gsm.wait_ok_ndb(2000);
		//Serial.println(data);
		return (data);
	}
	else
	{
		gsm.debug(F("OpenSend = Get"));
		flag_error = 1;
		return ("Error");
	}
}
int FIREBASE ::getInt(String thing)
{
	return (get(thing).toInt());
}
float FIREBASE ::getFloat(String thing)
{
	return (get(thing).toFloat());
}
String FIREBASE ::getTime()
{
	if (fb_ssl.startSend(CLI_ID, 0))
	{
		flag_error = 0;
		send_http("GET", "tp", "");
		fb_ssl.stopSend();
		fb_ssl.waitRead(5000);

		int len = fb_ssl.read(CLI_ID);
		//Serial.println(len);
		char flag = 0;
		String data;
		char c_pv = 0;
		while (len)
		{
			if (gsm.available())
			{
				String req = gsm.readStringUntil('\n');
				if (req.indexOf(F("Date:")) != -1)
				{
					Serial.println(F("SI GUARDO LA FECHAAAA a"));
					Serial.println(req);
					data=req;
					len=0;
					gsm.wait_ok_ndb(3000);
					return (data);
					

				}
				
			}
		}
		
		//Serial.println(data);
		return (data);
	}
	else
	{
		gsm.debug(F("OpenSend = Get"));
		flag_error = 1;
		return ("Error");
	}
}
bool FIREBASE ::remove(String thing)
{
	if (fb_ssl.startSend(CLI_ID, 0))
	{
		flag_error = 0;
		send_http("DELETE", thing, "0");
		fb_ssl.stopSend();
		fb_ssl.waitRead(3000);
		int len = fb_ssl.read(CLI_ID);
		while (len)
		{
			if (gsm.available())
			{
				String req = gsm.readStringUntil('\n');
				//Serial.println(req);
				if (req.indexOf(F("OK")) != -1)
				{
					len = 0;
				}
			}
		}
	}
	else
	{
		flag_error = 1;
		gsm.debug(F("OpenSend = Borrar"));
		return (false);
	}
}
bool FIREBASE ::close()
{
	return fb_ssl.close(CLI_ID);
}
bool FIREBASE ::status()
{
	if (gsm.available())
	{
		String req = gsm.readStringUntil('\n');
		if (req.indexOf(F("+QSSLURC: \"closed\"")) != -1)
		{
			flag_error = 1;
		}
	}
	if (flag_error == 1)
		return (false);

	return (true);
}

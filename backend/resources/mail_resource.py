from flask_smorest import Blueprint, abort
from flask import request
import smtplib
from email.message import EmailMessage
from schemas.mail_schema import MailSchema
import os

mail_bp = Blueprint("mail", __name__, url_prefix="/api", description="Endpoints para envío de correos")

# SMTP config
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
MAIL_SENDER = os.getenv("MAIL_SENDER", EMAIL_ADDRESS)



@mail_bp.route("/send-email", methods=["POST"])
@mail_bp.arguments(MailSchema)
@mail_bp.response(200, description="Correo enviado correctamente")
def send_email(data):
    """
    Enviar correo de admisiones Thomson School
    """

    nombre_alumno = data["nombre_alumno"]
    anio_lectivo = data["anio_lectivo"]
    representante_legal = data["representante_legal"]
    numero_contacto = data["numero_contacto"]
    colegio_actual = data["colegio_actual"]
    necesidades_especiales = data["necesidades_especiales"]
    mensaje = data.get("mensaje", "")

    try:
        msg = EmailMessage()
        msg["Subject"] = f"📩 Nueva solicitud de admisión – {nombre_alumno}"
        msg["From"] = MAIL_SENDER
        msg["To"] = "info@thomsonschool.edu.ec"

        # ----------- PLAIN TEXT -----------
        msg.set_content(
            f"""
Nueva solicitud de admisión recibida

Alumno: {nombre_alumno}
Año lectivo solicitado: {anio_lectivo}
Representante legal: {representante_legal}
Número de contacto: {numero_contacto}
Colegio actual: {colegio_actual}
Necesidades especiales: {necesidades_especiales}
Mensaje: {mensaje}

Notificación automática – Thomson School
"""
        )

        # ----------- HTML PROFESIONAL -----------
        msg.add_alternative(
            f"""
<html>
<body style="font-family: 'Segoe UI', Arial, sans-serif; margin:0; padding:0; background-color:#f4f4f7;">
    
    <table align="center" width="650" cellpadding="0" cellspacing="0" 
        style="background:#ffffff; margin-top:30px; border-radius:12px; 
               overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.15);">

        <!-- HEADER -->
        <tr>
            <td style="background:#7A1D2A; padding:25px; text-align:center; color:#ffffff;">
                <h1 style="margin:0; font-size:24px;">Unidad Educativa Particular<br>“Joseph Jhon Thomson”</h1>
                <p style="margin:5px 0 0; font-size:14px; opacity:0.9;">Solicitud desde página web institucional</p>
            </td>
        </tr>

        <!-- CONTENIDO -->
        <tr>
            <td style="padding:30px; color:#333333; font-size:16px;">

                <p style="margin-bottom:20px;">
                    Se ha recibido una nueva <strong>solicitud de admisión</strong> desde la página web institucional.
                </p>

                <table width="100%" cellpadding="6" cellspacing="0" style="border-collapse:collapse;">

                    <tr>
                        <td style="font-weight:bold; width:40%; color:#7A1D2A;">Nombre del alumno:</td>
                        <td>{nombre_alumno}</td>
                    </tr>

                    <tr>
                        <td style="font-weight:bold; color:#7A1D2A;">Año lectivo solicitado:</td>
                        <td>{anio_lectivo}</td>
                    </tr>

                    <tr>
                        <td style="font-weight:bold; color:#7A1D2A;">Representante legal:</td>
                        <td>{representante_legal}</td>
                    </tr>

                    <tr>
                        <td style="font-weight:bold; color:#7A1D2A;">Número de contacto:</td>
                        <td>{numero_contacto}</td>
                    </tr>

                    <tr>
                        <td style="font-weight:bold; color:#7A1D2A;">Colegio actual:</td>
                        <td>{colegio_actual}</td>
                    </tr>

                    <tr>
                        <td style="font-weight:bold; color:#7A1D2A;">Necesidades especiales:</td>
                        <td>{necesidades_especiales}</td>
                    </tr>

                    <tr>
                        <td style="font-weight:bold; color:#7A1D2A; vertical-align:top;">Mensaje del representante:</td>
                        <td style="white-space:pre-wrap;">{mensaje}</td>
                    </tr>

                </table>
            </td>
        </tr>

        <!-- FOOTER -->
        <tr>
            <td style="background:#f0f0f0; padding:15px; text-align:center; font-size:12px; color:#777;">
                Esta es una notificación automática desde la página web institucional de Thomson School.<br>
                No responder a este correo.
            </td>
        </tr>

    </table>

</body>
</html>
            """,
            subtype="html",
        )

        # ----------- ENVÍO DEL CORREO -----------
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as smtp:
            smtp.starttls()
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)

        return {"success": True, "message": "Correo enviado correctamente"}

    except Exception as e:
        print("❌ Error al enviar correo:", repr(e))
        abort(500, message="No se pudo enviar el correo")

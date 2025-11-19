from marshmallow import Schema, fields, validate

class MailSchema(Schema):
    nombre_alumno = fields.String(required=True)
    anio_lectivo = fields.String(required=True)
    representante_legal = fields.String(required=True)
    numero_contacto = fields.String(required=True)
    colegio_actual = fields.String(required=False, allow_none=True)
    necesidades_especiales = fields.String(
        required=True,
        validate=validate.OneOf(["si", "no"])
    )
    nivel = fields.String(allow_none=True)
    mensaje = fields.String(allow_none=True)

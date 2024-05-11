import mysql.connector
from .models import Device, Parameter, SensorData

class Database:
    def __init__(self, dbname, dbhost, dbport, dbuser, dbpassword):
        self.conn = mysql.connector.connect(
            host=dbhost,
            port=dbport,
            user=dbuser,
            password=dbpassword,
            database=dbname
        )
        self.cursor = self.conn.cursor()

    def create_device(self, device: Device):
        query = "CALL pi_create_device(%s);"
        self.cursor.execute(query, (device.name,))
        self.conn.commit()
        return device

    def create_device_parameter(self, parameter: Parameter):
        query = "CALL pi_create_device_parameter(%s, %s);"
        self.cursor.execute(query, (parameter.name, parameter.type))
        self.conn.commit()
        return parameter

    def create_sensor_data(self, sensor_data: SensorData):
        query = "CALL pi_create_sensor_data(%s, %s, %s, %s);"
        self.cursor.execute(query, (sensor_data.device_id, sensor_data.parameter_id, sensor_data.timestamp, sensor_data.value))
        self.conn.commit()
        return sensor_data

    def get_devices(self):
        query = "CALL sp_get_devices();"
        self.cursor.execute(query)
        devices = [Device(id=row[0], name=row[1]) for row in self.cursor.fetchall()]
        return devices

    def get_device_parameters(self):
        query = "CALL sp_get_device_parameters();"
        self.cursor.execute(query)
        parameters = [Parameter(id=row[0], name=row[1], type=row[2]) for row in self.cursor.fetchall()]
        return parameters

    def get_sensor_data(self):
        query = "CALL sp_get_sensor_data();"
        self.cursor.execute(query)
        sensor_data = [SensorData(id=row[0], device_id=row[1], parameter_id=row[2], timestamp=row[3], value=row[4]) for row in self.cursor.fetchall()]
        return sensor_data

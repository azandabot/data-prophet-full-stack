import os
from dotenv import load_dotenv

from fastapi import APIRouter, Depends
from typing import List
from fastapi.responses import JSONResponse
from database import Database
from database.models import Device, Parameter, SensorData

load_dotenv('.env')
db_config = {
    'dbname': os.getenv('DB_NAME'),
    'dbhost': os.getenv('DB_HOST'),
    'dbport': os.getenv('DB_PORT'),
    'dbuser': os.getenv('DB_USER'),
    'dbpassword': os.getenv('DB_PASSWORD'),
} 

db = Database(**db_config)

router = APIRouter()

@router.post("/devices/", response_model=Device)
def create_device(device: Device):
    return db.create_device(device)

@router.post("/parameters/", response_model=Parameter)
def create_device_parameter(parameter: Parameter):
    return db.create_device_parameter(parameter)

@router.post("/sensor-data/", response_model=SensorData)
def create_sensor_data(sensor_data: SensorData):
    return db.create_sensor_data(sensor_data)

@router.get("/devices/", response_model=List[Device])
def get_devices():
    return db.get_devices()

@router.get("/parameters/", response_model=List[Parameter])
def get_device_parameters():
    return db.get_device_parameters()

@router.get("/sensor-data/", response_model=List[SensorData])
def get_sensor_data():
    return db.get_sensor_data()

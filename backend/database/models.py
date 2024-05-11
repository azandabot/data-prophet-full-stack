from pydantic import BaseModel
from typing import List

class Device(BaseModel):
    id: int
    name: str

class Parameter(BaseModel):
    id: int
    name: str
    type: str

class SensorData(BaseModel):
    id: int
    device_id: int
    parameter_id: int
    timestamp: str
    value: str
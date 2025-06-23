from fastapi import FastAPI
from asgiref.wsgi import WsgiToAsgi

import api  # this is your FastAPI app

application = WsgiToAsgi(api.app)

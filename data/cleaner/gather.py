from dotenv import load_dotenv
from riotwatcher import LolWatcher, ApiError
from os import environ

load_dotenv()
lol_watcher = LolWatcher(environ['RIOT_API_KEY'])

print(lol_watcher)
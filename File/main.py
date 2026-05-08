from fastapi import FastAPI
import requests
import json
from pathlib import Path
from nlp_engine import extract_entities
from signal_detector import detect_signals
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
BASE_DIR = Path(__file__).resolve().parent


def load_data():

    local_data = []

    with open(BASE_DIR / "data.json", "r", encoding="utf-8-sig") as f:
        local_data = json.load(f)

    try:
        url = "https://www.reddit.com/search.json?q=metformin"

        headers = {
            "User-Agent": "Mozilla/5.0"
        }

        response = requests.get(url, headers=headers)

        reddit_posts = response.json()["data"]["children"]

        reddit_data = []

        for post in reddit_posts[:10]:
            title = post["data"]["title"]
            reddit_data.append("[Reddit] " + title)

        return local_data + reddit_data

    except Exception as e:
        print("Reddit fetch failed:", e)
        return local_data

@app.get("/")
def root():
    return {"message": "WasthyaWatch AI Running"}

@app.get("/analyze")
def analyze():
    data = load_data()

    extracted = [extract_entities(text) for text in data]


    alerts = detect_signals(extracted)

    return {
        "raw_data": data,
        "extracted": extracted,
        "alerts": alerts
    }

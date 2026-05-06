from fastapi import FastAPI
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
    with open(BASE_DIR / "data.json", "r", encoding="utf-8-sig") as f:
        return json.load(f)

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

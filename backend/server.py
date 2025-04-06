from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Allow frontend to access this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Prompt(BaseModel):
    prompt: str

@app.post("/gemini")
def get_gemini_response(data: Prompt):
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        return {"error": "GEMINI_API_KEY not set in .env file"}

    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + api_key

    headers = {"Content-Type": "application/json"}
    payload = {
        "contents": [{"parts": [{"text": data.prompt}]}]
    }

    response = requests.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        gemini_text = response.json()["candidates"][0]["content"]["parts"][0]["text"]
        return {"response": gemini_text}
    else:
        return {"error": "Failed to get response from Gemini"}

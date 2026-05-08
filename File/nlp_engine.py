DRUGS = ["metformin", "paracetamol"]

SYMPTOMS = [
    "headache",
    "dizziness",
    "fever",
    "weakness"
]

def extract_entities(text):
    text_lower = text.lower()

    drug = next(
        (d for d in DRUGS if d in text_lower),
        None
    )

    symptom = next(
        (s for s in SYMPTOMS if s in text_lower),
        None
    )

    return {
        "text": text,
        "drug": drug,
        "symptom": symptom
    }

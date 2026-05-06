import spacy

nlp = spacy.load("en_core_web_sm")

DRUGS = ["metformin", "paracetamol"]
SYMPTOMS = ["headache", "dizziness", "fever", "weakness"]

def extract_entities(text):
    original_text = text
    doc = nlp(text.lower())
    lemmas = {token.lemma_ for token in doc}

    drug = next((d for d in DRUGS if d in lemmas or d in text.lower()), None)
    symptom = next((s for s in SYMPTOMS if s in lemmas or s in text.lower()), None)

    return {
        "text": original_text,
        "drug": drug,
        "symptom": symptom
    }

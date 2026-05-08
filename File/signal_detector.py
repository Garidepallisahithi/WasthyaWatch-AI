from collections import defaultdict

# Severity keywords
SEVERITY_WORDS = [
    "severe",
    "worst",
    "extreme",
    "terrible",
    "serious",
    "dangerous"
]

def detect_signals(extracted_data):
    counts = defaultdict(int)
    severity_score = defaultdict(int)

    # Count mentions + severity
    for item in extracted_data:
        key = (item["drug"], item["symptom"])

        if None in key:
            continue

        counts[key] += 1

        text_lower = item["text"].lower()

        for word in SEVERITY_WORDS:
            if word in text_lower:
                severity_score[key] += 1

    alerts = []

    for key, count in counts.items():

        # Signal threshold
        if count >= 2:

            drug, symptom = key

            # HIGH severity logic
            if (
                severity_score[key] >= 1
                
            ):
                severity = "High"
                confidence = 0.9

            # MEDIUM severity
            elif count >= 2:
                severity = "Medium"
                confidence = 0.7

            else:
                severity = "Low"
                confidence = 0.5

            # Trend logic
            previous_count = 1
            increase = count - previous_count

            trend = (
                "Increasing"
                if increase > 0
                else "Stable"
            )

            # Source attribution
            source = "X / Reddit"

            alerts.append({
                "drug": drug,
                "symptom": symptom,
                "count": count,
                "severity": severity,
                "confidence": confidence,
                "trend": trend,
                "source": source
            })

    return alerts
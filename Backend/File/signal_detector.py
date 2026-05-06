from collections import defaultdict

# Words indicating higher severity
SEVERITY_WORDS = ["severe", "worst", "extreme"]

def detect_signals(extracted_data):
    counts = defaultdict(int)
    severity_score = defaultdict(int)

    #  Step 1: Count occurrences and severity
    for item in extracted_data:
        key = (item["drug"], item["symptom"])

        # Skip if drug or symptom is missing
        if None in key:
            continue

        counts[key] += 1

        # Check severity keywords
        for word in SEVERITY_WORDS:
            if word in item["text"]:
                severity_score[key] += 1

    alerts = []

    # 🔹 Step 2: Generate alerts
    for key, count in counts.items():
        if count >= 2:   # threshold for signal detection
            drug, symptom = key

            #  Improved Severity Logic
            if severity_score[key] >= 2:
                severity = "High"
            elif count >= 2:
                severity = "Medium"
            else:
                severity = "Low"

            #  Confidence Score
            confidence = round(min(1.0, 0.5 + count * 0.1), 2)

            #  Trend Detection (simulated previous data)
            previous_count = 1   # assume past mentions
            increase = count - previous_count
            trend = "Increasing" if increase > 0 else "Stable"

            #  Multi-source simulation
            source = "Twitter / Reddit"

            #  Final alert object
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
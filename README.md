# WasthyaWatch AI

## Real-Time Social Listening and Patient Safety Signal Detection Platform

WasthyaWatch AI is an AI-powered healthcare monitoring platform designed to identify patient safety signals, adverse drug reactions, treatment dissatisfaction, and emerging healthcare concerns from publicly available social and community-driven platforms.

The platform continuously analyzes patient-generated discussions from sources such as Reddit, X (social feeds), and healthcare forums to detect meaningful healthcare trends and potential pharmacovigilance signals in real time.

Developed as part of the AI for Bharat Hackathon under the theme:

**“Real-Time Social Listening for Patient Experience & Safety Signals.”**

---

# Problem Statement

Healthcare organizations and pharmacovigilance teams often rely on delayed reporting mechanisms to identify adverse drug reactions, treatment failures, and patient dissatisfaction.

However, modern patients increasingly share real healthcare experiences across:

* Social media platforms
* Public discussion forums
* Community-driven healthcare groups
* Online patient conversations

These conversations contain valuable early indicators of:

* Adverse drug reactions
* Treatment ineffectiveness
* Side effects
* Patient dissatisfaction
* Emerging healthcare risks

Traditional monitoring systems often fail to capture these insights in real time.

WasthyaWatch AI addresses this challenge through a scalable AI-driven social listening pipeline capable of:

* Monitoring multiple public data sources
* Extracting healthcare-related entities
* Detecting safety signals
* Performing trend analysis
* Highlighting critical patient concerns
* Providing explainable AI-driven insights

---

# Real-World Scenario

Imagine a patient posts:

> “Severe headache after taking metformin.”

Within seconds, WasthyaWatch AI ingests the discussion, extracts the healthcare entities, identifies repeated symptom patterns, calculates severity and confidence, and flags the signal on the monitoring dashboard as a potential emerging patient safety concern.

This enables healthcare teams, pharmacovigilance analysts, and researchers to identify emerging risks earlier than traditional reporting workflows.

---

# Solution Overview

WasthyaWatch AI provides an end-to-end healthcare signal intelligence pipeline for:

1. Multi-source patient data monitoring
2. Social signal ingestion
3. NLP-based healthcare entity extraction
4. Adverse event detection
5. Severity analysis
6. Confidence scoring
7. Trend visualization
8. Actionable healthcare insights

The platform is designed with modularity and scalability in mind, allowing future integration of advanced NLP models, healthcare APIs, and additional acquisition engines.

---

# System Architecture 
┌────────────────────┐
│   Data Sources     │
│────────────────────│
│ Reddit JSON Feeds  │
│ X Social Mentions  │
│ Healthcare Forums  │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Data Acquisition   │
│────────────────────│
│ Source Monitoring  │
│ Content Collection │
│ Feed Aggregation   │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ NLP Processing     │
│────────────────────│
│ Drug Extraction    │
│ Symptom Detection  │
│ Severity Analysis  │
│ Confidence Scoring │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Signal Detection   │
│────────────────────│
│ Trend Analysis     │
│ Safety Alerts      │
│ Risk Classification│
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Monitoring Dashboard│
│────────────────────│
│ Visual Analytics   │
│ Alert Cards        │
│ Signal Trends      │
│ Recommended Actions│
└────────────────────┘

# Core Features

## Multi-Source Social Listening

The platform supports monitoring from multiple healthcare-related public discussion sources including:

* Reddit
* X (social feed simulation)
* Healthcare forums

Each source is independently tracked and visualized through the dashboard.

---

## Real-Time Safety Signal Detection

The system identifies repeated mentions of:

* Drug names
* Symptoms
* Adverse reactions
* Treatment ineffectiveness

and groups them into detectable healthcare safety signals.

Example:

* Metformin + severe headache
* Paracetamol + persistent fever

---

## NLP-Based Healthcare Entity Extraction

The platform performs lightweight NLP-based extraction to identify:

* Drugs
* Symptoms
* Side effects
* Treatment dissatisfaction

This converts raw patient conversations into structured healthcare intelligence.

---

## Severity Classification

Detected signals are classified into:

* High Severity
* Medium Severity
* Low Severity

based on:

* Frequency of mentions
* Severity indicators
* Consistency across monitored sources

---

## Confidence Scoring

Each detected signal includes a confidence score generated using:

* Signal frequency
* Cross-source consistency
* Severity indicators
* NLP extraction reliability

This improves explainability and trustworthiness.

---

## Trend Analysis

The platform visualizes how patient safety mentions evolve over time using trend analytics.

The dashboard helps identify:

* Increasing adverse signals
* Emerging healthcare concerns
* Escalating treatment issues

---

## Explainable AI Insights

The system improves interpretability through:

* Source attribution
* Confidence explanations
* Severity reasoning
* Extracted insight visualization

---

## Multilingual Patient Signal Handling

The platform demonstrates support for multilingual and mixed-language patient expressions frequently observed in Indian healthcare discussions.

Examples:

* “Metformin lene ke baad severe headache ho raha hai”
* “Dawai khane ke baad dizziness feel ho raha hai”

This strongly aligns with the AI for Bharat vision of inclusive and localized AI systems.

---

# Workflow

1. Public healthcare-related discussions are collected from multiple sources.
2. The ingestion engine aggregates patient conversations.
3. NLP extraction identifies drugs and symptoms.
4. Related healthcare mentions are grouped into signals.
5. Severity and confidence are calculated.
6. Trend analysis is performed.
7. Signals are displayed on the monitoring dashboard.
8. Recommended actions are generated for healthcare review.

---

# Technology Stack

## Frontend

* React.js
* Axios
* Recharts
* Responsive Dashboard UI

## Backend

* FastAPI
* Python
* Requests
* Uvicorn

## Deployment

### Frontend

* Vercel

### Backend

* Render

## Version Control

* GitHub

---

# Dashboard Highlights

The WasthyaWatch AI dashboard provides:

* Live source monitoring
* Severity-based healthcare alerts
* Trend analysis graphs
* Confidence-based explainability
* Extracted patient insights
* Raw monitored conversations
* Recommended healthcare actions

The interface was intentionally designed to resemble a deployable healthcare intelligence platform rather than a simple academic prototype.

---

# Potential Impact

WasthyaWatch AI aims to improve early healthcare signal detection by enabling organizations to monitor patient experiences directly from public discussions.

Potential impact areas include:

* Pharmacovigilance
* Drug safety monitoring
* Public health analytics
* Early adverse event detection
* Patient experience analysis
* Healthcare trend intelligence

---

# Future Enhancements

Planned future improvements include:

* Transformer-based healthcare NLP models
* Real-time live ingestion pipelines
* Geographical healthcare heatmaps
* Advanced multilingual analysis
* Historical trend storage
* Healthcare alert escalation workflows

---

# Deployment Links

## Live Frontend

[https://wasthya-watch-geoejkrsk-garidepallisahithis-projects.vercel.app](https://wasthya-watch-geoejkrsk-garidepallisahithis-projects.vercel.app)

## Live Backend API

[https://wasthyawatch-ai.onrender.com](https://wasthyawatch-ai.onrender.com)

## GitHub Repository

[https://github.com/Garidepallisahithi/WasthyaWatch-AI](https://github.com/Garidepallisahithi/WasthyaWatch-AI)

---

# Instructions to Run Locally

## Backend Setup

### 1. Navigate to backend directory

```bash
cd Backend/File
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Start backend server

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

## Frontend Setup

### 1. Navigate to frontend directory

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start frontend

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# Team Contributions

## WasthyaWatch AI Team

### Frontend Development

* Dashboard UI
* Visualization components
* Alert presentation layer

### Backend Development

* FastAPI service implementation
* Signal detection pipeline
* API integration

### NLP & Signal Intelligence

* Drug and symptom extraction
* Severity analysis
* Confidence scoring
* Trend detection logic

### Deployment & Integration

* GitHub integration
* Vercel deployment
* Render backend deployment

---

# Disclaimer

This platform is intended for research and prototype demonstration purposes only.

Signals are derived from publicly available patient discussions and should not be interpreted as clinically verified medical evidence.

The platform is designed to assist healthcare monitoring workflows and does not replace professional medical evaluation.


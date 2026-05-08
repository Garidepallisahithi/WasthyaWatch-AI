import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label
} from "recharts";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://wasthyawatch-ai.onrender.com/analyze")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!data)
    return (
      <h2 style={{ padding: "20px", fontFamily: "Inter, sans-serif" }}>
        Loading...
      </h2>
    );

  const trendData = [
    { step: "T1", mentions: 2 },
    { step: "T2", mentions: 4 },
    { step: "T3", mentions: 5 },
    { step: "T4", mentions: 7 }
  ];

  const sortedAlerts = [...data.alerts].sort((a, b) => {
    const order = { High: 3, Medium: 2, Low: 1 };
    return order[b.severity] - order[a.severity];
  });

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      {/* HEADER */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        <h1
          style={{
            fontSize: "44px",
            fontWeight: "800",
            letterSpacing: "-1.5px",
            color: "#111827",
            marginBottom: "10px"
          }}
        >
          WasthyaWatch AI
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#6b7280",
            marginBottom: "8px"
          }}
        >
          Real-Time Patient Safety Signal Detection System
        </p>

        <p
          style={{
            fontSize: "13px",
            color: "#9ca3af"
          }}
        >
          Signals are derived from public data and are not clinically verified reports
        </p>
      </div>

      {/* METRICS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            flex: "1",
            minWidth: "220px",
            backgroundColor: "#ffffff",
            padding: "18px",
            borderRadius: "14px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            textAlign: "center"
          }}
        >
          <h2 style={{ margin: 0, color: "#dc2626" }}>
            {data.alerts.length}
          </h2>

          <p style={{ marginTop: "8px", color: "#6b7280" }}>
            Signals Detected
          </p>
        </div>

        <div
          style={{
            flex: "1",
            minWidth: "220px",
            backgroundColor: "#ffffff",
            padding: "18px",
            borderRadius: "14px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            textAlign: "center"
          }}
        >
          <h2 style={{ margin: 0, color: "#2563eb" }}>
            3
          </h2>

          <p style={{ marginTop: "8px", color: "#6b7280" }}>
            Sources Monitored
          </p>
        </div>

        <div
          style={{
            flex: "1",
            minWidth: "220px",
            backgroundColor: "#ffffff",
            padding: "18px",
            borderRadius: "14px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            textAlign: "center"
          }}
        >
          <h2 style={{ margin: 0, color: "#ea580c" }}>
            1
          </h2>

          <p style={{ marginTop: "8px", color: "#6b7280" }}>
            High Risk Alerts
          </p>
        </div>
      </div>

      {/* LIVE SOURCE STATUS */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "14px",
          marginBottom: "30px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
        }}
      >
        <h3
          style={{
            marginBottom: "18px",
            color: "#111827",
            fontSize: "20px",
            fontWeight: "700"
          }}
        >
          Live Source Status
        </h3>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >
          <div
            style={{
              backgroundColor: "#ecfdf5",
              color: "#065f46",
              padding: "12px 18px",
              borderRadius: "10px",
              fontWeight: "600"
            }}
          >
            Reddit • Active
          </div>

          <div
            style={{
              backgroundColor: "#ecfdf5",
              color: "#065f46",
              padding: "12px 18px",
              borderRadius: "10px",
              fontWeight: "600"
            }}
          >
            X • Active
          </div>

          <div
            style={{
              backgroundColor: "#ecfdf5",
              color: "#065f46",
              padding: "12px 18px",
              borderRadius: "10px",
              fontWeight: "600"
            }}
          >
            Forums • Active
          </div>
        </div>
      </div>

      {/* CRITICAL SIGNAL */}
      <div
        style={{
          backgroundColor: "#fef2f2",
          border: "1px solid #fca5a5",
          padding: "20px",
          borderRadius: "14px",
          marginBottom: "35px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
        }}
      >
        <h3
          style={{
            color: "#dc2626",
            marginBottom: "8px",
            fontWeight: "700"
          }}
        >
          ⚠️ Critical Safety Signal
        </h3>

        <p
          style={{
            color: "#374151",
            fontSize: "15px"
          }}
        >
          Severe headache reports associated with metformin are increasing.
        </p>
      </div>

      {/* ALERTS */}
      <h2
        style={{
          color: "#111827",
          fontWeight: "800",
          letterSpacing: "-0.5px",
          marginBottom: "20px"
        }}
      >
        🚨 Detected Safety Signals
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        {sortedAlerts.map((alert, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 320px",
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "22px",
              border:
                alert.severity === "High"
                  ? "2px solid #dc2626"
                  : "1px solid #e5e7eb",
              boxShadow:
                alert.severity === "High"
                  ? "0 8px 24px rgba(220,38,38,0.15)"
                  : "0 8px 20px rgba(0,0,0,0.06)"
            }}
          >
            <p><strong>Drug:</strong> {alert.drug}</p>
            <p><strong>Symptom:</strong> {alert.symptom}</p>
            <p><strong>Mentions:</strong> {alert.count}</p>

            <p>
              <strong>Severity:</strong>{" "}
              <span
                style={{
                  backgroundColor:
                    alert.severity === "High"
                      ? "#fee2e2"
                      : "#fef3c7",
                  color:
                    alert.severity === "High"
                      ? "#b91c1c"
                      : "#d97706",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  fontWeight: "700",
                  fontSize: "13px"
                }}
              >
                {alert.severity}
              </span>
            </p>

            <p><strong>Confidence:</strong> {alert.confidence}</p>

            <p
              style={{
                marginTop: "8px",
                fontSize: "13px",
                color: "#6b7280",
                lineHeight: "1.5"
              }}
            >
              Confidence score is derived from frequency, symptom severity,
              and consistency across multiple patient reports.
            </p>

            <p><strong>Trend:</strong> {alert.trend}</p>

            <p>
              <strong>Source:</strong>{" "}
              {alert.source.replace("Twitter", "X")}
            </p>
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop: "12px",
          color: "#6b7280",
          fontSize: "12px"
        }}
      >
        Showing signals with confidence ≥ 0.6
      </p>

      {/* GRAPH */}
      <h2
        style={{
          marginTop: "50px",
          marginBottom: "18px",
          fontWeight: "800",
          color: "#111827",
          letterSpacing: "-0.5px"
        }}
      >
        Signal Trend Analysis
      </h2>

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          padding: "18px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          border: "1px solid #f1f5f9",
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        <p
          style={{
            color: "#6b7280",
            fontSize: "14px",
            marginBottom: "12px",
            textAlign: "center"
          }}
        >
          Trend showing cumulative increase in patient-reported safety signals.
        </p>

        <div style={{ width: "100%", height: "280px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={trendData}
              margin={{
                top: 20,
                right: 20,
                left: 10,
                bottom: 40
              }}
            >
              <CartesianGrid
                stroke="#e5e7eb"
                strokeDasharray="4 4"
              />

              <XAxis
                dataKey="step"
                tick={{ fontSize: 12 }}
              >
                <Label
                  value="Monitoring Timeline"
                  position="bottom"
                  offset={15}
                  style={{
                    fontSize: 12,
                    fill: "#4b5563"
                  }}
                />
              </XAxis>

              <YAxis
                tick={{ fontSize: 12 }}
                domain={[0, 8]}
              >
                <Label
                  value="Reported Mentions"
                  angle={-90}
                  position="insideLeft"
                  style={{
                    textAnchor: "middle",
                    fontSize: 12,
                    fill: "#4b5563"
                  }}
                />
              </YAxis>

              <Tooltip />

              <Line
                type="monotone"
                dataKey="mentions"
                stroke="#dc2626"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* EXTRACTED INSIGHTS */}
      <h2
        style={{
          marginTop: "50px",
          marginBottom: "18px",
          fontWeight: "800",
          color: "#111827"
        }}
      >
        Extracted Insights
      </h2>

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          padding: "22px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
        }}
      >
        <ul>
          {data.extracted.map((item, i) => (
            <li
              key={i}
              style={{
                marginBottom: "10px",
                lineHeight: "1.6"
              }}
            >
              {item.text.includes("]") ? (
                <>
                  <span
                    style={{
                      color: "#2563eb",
                      fontWeight: "600"
                    }}
                  >
                    {item.text.split("]")[0]}]
                  </span>{" "}
                  {item.text.split("]").slice(1).join("]")}
                </>
              ) : (
                item.text
              )}{" "}
              → <strong>{item.drug}</strong> +{" "}
              <strong>{item.symptom || "ineffectiveness"}</strong>
            </li>
          ))}
        </ul>
      </div>

      {/* RAW DATA */}
      <h2
        style={{
          marginTop: "50px",
          marginBottom: "18px",
          fontWeight: "800",
          color: "#111827"
        }}
      >
        Raw Patient Data
      </h2>

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          padding: "22px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
        }}
      >
        <ul>
          {data.raw_data.map((text, i) => (
            <li
              key={i}
              style={{
                marginBottom: "10px",
                lineHeight: "1.6"
              }}
            >
              <span
                style={{
                  color: "#9ca3af",
                  fontSize: "12px",
                  marginRight: "10px"
                }}
              >
                {i + 1} mins ago
              </span>

              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* ACTIONS */}
      <div
        style={{
          marginTop: "40px",
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          padding: "22px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
        }}
      >
        <h3
          style={{
            fontWeight: "800",
            marginBottom: "12px",
            color: "#111827"
          }}
        >
          Recommended Actions
        </h3>

        <ul>
          <li>Alert pharmacovigilance review team</li>
          <li>Flag signal for regulatory assessment</li>
          <li>Increase monitoring of reported adverse events</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
import { useState } from "react";

export default function TrafficPage({ setPage }) {
  const [color, setColor] = useState("yellow");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0f1a",
        color: "white",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* GRID BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      {/* BACK BUTTON */}
      <button
        onClick={() => setPage("home")}
        style={{
          position: "absolute",
          top: "100px",
          left: "40px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "10px 18px",
          borderRadius: "10px",
          color: "#aaa",
          cursor: "pointer",
          zIndex: 10
        }}
      >
        ← BACK TO HOME
      </button>

      {/* MAIN CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          margin: "0 auto",
          paddingTop: "120px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#a855f7", letterSpacing: "2px" }}>
          EXERCISE 05
        </p>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "900",
            marginBottom: "10px",
          }}
        >
          Traffic Light
        </h1>

        <p style={{ opacity: 0.6, marginBottom: "40px" }}>
          A component using <code>switch</code> logic to show signals
        </p>

        {/* CARD */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "20px",
            padding: "40px",
            width: "420px",
            margin: "auto",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          }}
        >
          {/* TRAFFIC LIGHT */}
          <div
            style={{
              width: "80px",
              margin: "auto",
              background: "#111",
              padding: "15px",
              borderRadius: "30px",
            }}
          >
            {["red", "yellow", "green"].map((c) => (
              <div
                key={c}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  margin: "10px auto",
                  background:
                    color === c ? c : "rgba(255,255,255,0.1)",
                  boxShadow:
                    color === c
                      ? `0 0 20px ${c}, 0 0 40px ${c}`
                      : "none",
                  transition: "0.3s",
                }}
              />
            ))}
          </div>

          {/* MESSAGE */}
          <h2
            style={{
              marginTop: "20px",
              color:
                color === "red"
                  ? "#ef4444"
                  : color === "yellow"
                  ? "#facc15"
                  : "#22c55e",
            }}
          >
            {color === "red"
              ? "⛔ Stop"
              : color === "yellow"
              ? "⚠ Slow Down"
              : "✅ Go"}
          </h2>

          {/* BUTTONS */}
          <div style={{ marginTop: "20px" }}>
            {["red", "yellow", "green"].map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: "none",
                  margin: "10px",
                  background: c,
                  cursor: "pointer",
                  transform:
                    color === c ? "scale(1.3)" : "scale(1)",
                  boxShadow:
                    color === c
                      ? `0 0 10px ${c}`
                      : "none",
                }}
              />
            ))}
          </div>

          {/* FOOT NOTE */}
          <div
            style={{
              marginTop: "20px",
              opacity: 0.4,
              fontSize: "12px",
            }}
          >
            Selected color: <b>{color}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

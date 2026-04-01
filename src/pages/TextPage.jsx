import { useState } from "react";

export default function TextPage({ setPage }) {
  const [text, setText] = useState("Hi, good Moring");

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const upperCount = text.replace(/[^A-Z]/g, "").length;

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "#070B14",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        position: "relative",
      }}
    >
      {/* GRID BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ✅ BACK BUTTON HERE */}
      <button
        onClick={() => setPage("home")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 18px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#aaa",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "12px",
          letterSpacing: "1px",
          zIndex: 10, // ✅ IMPORTANT
        }}
      >
        ← BACK TO HOME
      </button>

      {/* CENTER CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* HEADER */}
        <p style={{ color: "#22c55e", letterSpacing: "2px" }}>EXERCISE 03</p>

        <h1 style={{ fontSize: "3.5rem", fontWeight: "800" }}>
          Live Text Mirror
        </h1>

        <p style={{ opacity: 0.6, marginBottom: "30px", textAlign: "center" }}>
          A text state linked to input — mirrored instantly.
        </p>

        {/* CARD */}
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
            background: "rgba(255,255,255,0.05)",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* INPUT */}
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={120}
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "12px",
              border: "2px solid #3b82f6",
              background: "#0f172a",
              color: "#fff",
              outline: "none",
            }}
          />

          <div style={{ textAlign: "right", opacity: 0.5 }}>
            {text.length} / 120
          </div>

          <div style={{ textAlign: "center", margin: "15px 0" }}>↓</div>

          {/* OUTPUT */}
          <div
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.3)",
            }}
          >
            <div style={{ fontSize: "12px", opacity: 0.5 }}>
              MIRRORED OUTPUT
            </div>

            <div
              style={{
                fontSize: "22px",
                fontWeight: "600",
                background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {text}
            </div>
          </div>

          {/* STATS */}
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <Stat label="CHARACTERS" value={text.length} />
            <Stat label="WORDS" value={wordCount} />
            <Stat label="UPPERCASE" value={upperCount} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div
      style={{
        flex: 1,
        background: "rgba(255,255,255,0.05)",
        padding: "15px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <div style={{ color: "#22c55e", fontSize: "20px" }}>{value}</div>
      <div style={{ fontSize: "11px", opacity: 0.5 }}>{label}</div>
    </div>
  );
}

import { useState } from "react";

export default function HoverPage({ setPage }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0f1a",
        color: "#fff",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔥 GRID BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 0,
          pointerEvents: "none",
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
    zIndex: 10 // ✅ IMPORTANT
  }}
>
        ← BACK TO HOME
      </button>


      {/* 🔥 CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          paddingTop: "120px",
        }}
      >
        {/* TITLE */}
        <p style={{ color: "#3b82f6", letterSpacing: "2px" }}>
          EXERCISE 04
        </p>

        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            marginBottom: "10px",
          }}
        >
          Hover Event <br /> Handler
        </h1>

        <p style={{ opacity: 0.6, marginBottom: "40px" }}>
          A div using <code>onMouseEnter</code> and{" "}
          <code>onMouseLeave</code> to switch background color
        </p>

        {/* 🔥 CARD */}
        <div
          style={{
            width: "600px",
            margin: "0 auto",
            padding: "30px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* INNER BOX */}
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              height: "200px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.4s",
              background: hovered
                ? "linear-gradient(135deg, #ff4d4d, #ff1a1a)"
                : "linear-gradient(135deg, #3b82f6, #2563eb)",
              boxShadow: hovered
                ? "0 0 40px rgba(255,0,0,0.5)"
                : "0 0 40px rgba(59,130,246,0.5)",
            }}
          >
            {/* CIRCLE */}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginBottom: "10px",
                background: hovered
                  ? "radial-gradient(circle, #ff9a9a, #ff0000)"
                  : "radial-gradient(circle, #93c5fd, #1d4ed8)",
              }}
            />

            <h2>
              {hovered ? "Mouse Entered!" : "Hover Over Me"}
            </h2>

            <p style={{ fontSize: "12px", opacity: 0.7 }}>
              {hovered ? "onMouseEnter fired" : "onMouseLeave fired"}
            </p>
          </div>

          {/* STATUS */}
          <div
            style={{
              marginTop: "20px",
              padding: "8px 16px",
              borderRadius: "999px",
              display: "inline-block",
              border: `1px solid ${
                hovered ? "#ff4d4d" : "#3b82f6"
              }`,
              color: hovered ? "#ff4d4d" : "#3b82f6",
              fontSize: "12px",
            }}
          >
            ● Current state:{" "}
            {hovered ? "RED (hovered)" : "BLUE (idle)"}
          </div>
        </div>
      </div>
    </div>
  );
}
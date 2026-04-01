import { useState } from "react";

export default function ButtonPage({ setPage }) {
  const [label, setLabel] = useState("My Button");
  const [color, setColor] = useState("#a855f7");

  const preset = [
    { name: "Primary", color: "#3b82f6" },
    { name: "Danger", color: "#ef4444" },
    { name: "Warning", color: "#facc15" },
    { name: "Dark", color: "#1f2937" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 20%, #1a1a3a, transparent), radial-gradient(circle at 80% 80%, #3a1a5a, transparent), #0a0a0f",
        color: "#fff",
        fontFamily: "Nunito, sans-serif",
        position: "relative",
      }}
    >
      {/* GRID */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* BACK BUTTON HERE */}
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
          }}
        >
          ← BACK TO HOME
        </button>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p
            style={{
              color: "#ff6b6b",
              letterSpacing: "2px",
              fontSize: "12px",
            }}
          >
            EXERCISE 01
          </p>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: "900",
              lineHeight: "1.1",
            }}
          >
            Button <br /> Component
          </h1>

          <p style={{ opacity: 0.5, marginTop: "10px" }}>
            A reusable button component accepting label and color props
          </p>
        </div>

        {/* CARD */}
        <div
          style={{
            maxWidth: "700px",
            margin: "60px auto",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "40px",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* PRESET BUTTONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            {preset.map((p) => (
              <button
                key={p.name}
                onClick={() => setColor(p.color)}
                style={{
                  padding: "12px 24px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  background: p.color,
                  color: p.color === "#facc15" ? "#000" : "#fff",
                  fontWeight: "700",
                  boxShadow: `0 0 20px ${p.color}88`,
                }}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* DIVIDER */}
          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.1)",
              marginBottom: "30px",
            }}
          />

          {/* INPUT + PICKER */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                outline: "none",
              }}
            />

            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{
                width: "50px",
                height: "40px",
                border: "none",
                cursor: "pointer",
              }}
            />

            {/* PREVIEW BUTTON */}
            <button
              style={{
                padding: "12px 26px",
                borderRadius: "999px",
                border: "none",
                background: color,
                color: "#fff",
                fontWeight: "700",
                boxShadow: `0 0 20px ${color}`,
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

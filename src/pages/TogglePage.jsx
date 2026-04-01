import { useState } from "react";

export default function TogglePage({ setPage }) {
  const [isDay, setIsDay] = useState(true);

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
         {/* ✅ BACK BUTTON HERE */}
      {/* <button
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
          letterSpacing: "1px"
        }}
      >
        ← BACK TO HOME
      </button> */}

        {/* HEADER */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p
            style={{
              color: "#facc15",
              letterSpacing: "2px",
              fontSize: "12px",
            }}
          >
            EXERCISE 02
          </p>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: "900",
              lineHeight: "1.1",
            }}
          >
            Toggle <br /> Component
          </h1>

          <p style={{ opacity: 0.5, marginTop: "10px" }}>
            A state-driven toggle between ON and OFF
          </p>
        </div>

        {/* CARD */}
        <div
          style={{
            maxWidth: "720px",
            margin: "60px auto",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "20px",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* INNER SCENE */}
          <div
            style={{
              borderRadius: "18px",
              height: "300px",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.8s ease",
              background: isDay
                ? "linear-gradient(to bottom, #87CEEB, #FCD34D)"
                : "linear-gradient(to bottom, #0f172a, #1e293b)",
            }}
          >
            {/* SUN */}
            {isDay && (
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #fff, #facc15)",
                  boxShadow: "0 0 40px #facc15",
                }}
              />
            )}

            {/* MOON */}
            {!isDay && (
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "#e5e7eb",
                  boxShadow: "0 0 30px #fff",
                }}
              />
            )}

            {/* TEXT */}
            <div
              style={{
                position: "absolute",
                top: "150px",
                width: "100%",
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "800",
                color: isDay ? "#92400e" : "#cbd5f5",
                letterSpacing: "2px",
              }}
            >
              {isDay ? "☀ DAYTIME" : "🌙 NIGHT"}
            </div>

            {/* TOGGLE SWITCH */}
            <div
              onClick={() => setIsDay(!isDay)}
              style={{
                position: "absolute",
                bottom: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "90px",
                height: "40px",
                borderRadius: "999px",
                background: isDay
                  ? "linear-gradient(135deg,#fde68a,#facc15)"
                  : "linear-gradient(135deg,#1e293b,#6366f1)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "4px",
                transition: "all 0.5s ease",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#fff",
                  transform: isDay
                    ? "translateX(50px)"
                    : "translateX(0px)",
                  transition: "all 0.4s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
              >
                {isDay ? "☀" : "🌙"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
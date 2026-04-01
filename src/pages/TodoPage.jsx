import { useState } from "react";

export default function TodoPage({ setPage }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React props & state", done: false },
    { id: 2, text: "Build an amazing UI", done: true },
    { id: 3, text: "Master hooks & effects", done: false },
    { id: 4, text: "Deploy to production", done: false },
  ]);

  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([
      { id: Date.now(), text: input, done: false },
      ...todos,
    ]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const total = todos.length;
  const done = todos.filter((t) => t.done).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0f1a",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      {/* 🔥 BACKGROUND GRID (NON-CLICK BLOCKING) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 0,
          pointerEvents: "none", // ✅ IMPORTANT
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
          letterSpacing: "1px"
        }}
      >
        ← BACK TO HOME
      </button>


      {/* 🔥 MAIN CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "700px",
          margin: "0 auto",
          paddingTop: "120px",
        }}
      >
        <p style={{ color: "#f59e0b", letterSpacing: "2px" }}>
          EXERCISE 06
        </p>

        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          Todo List
        </h1>

        <p style={{ opacity: 0.6, marginBottom: "30px" }}>
          Add tasks and manage your list dynamically
        </p>

        {/* 🔥 CARD */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "20px",
            padding: "20px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* STATS */}
          <div style={{ marginBottom: "10px", opacity: 0.7 }}>
            {total} total &nbsp; {done} done &nbsp;{" "}
            {total - done} remaining
          </div>

          {/* INPUT */}
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task..."
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "#fff",
              }}
            />
            <button
              onClick={addTodo}
              style={{
                padding: "10px 16px",
                borderRadius: "10px",
                border: "none",
                background: "#f97316",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>

          {/* LIST */}
          <div style={{ marginTop: "20px" }}>
            {todos.map((t, index) => (
              <div
                key={t.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <div
                  onClick={() => toggleTodo(t.id)}
                  style={{
                    cursor: "pointer",
                    textDecoration: t.done
                      ? "line-through"
                      : "none",
                    opacity: t.done ? 0.5 : 1,
                  }}
                >
                  {t.text}
                </div>

                <button
                  onClick={() => removeTodo(t.id)}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#999",
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
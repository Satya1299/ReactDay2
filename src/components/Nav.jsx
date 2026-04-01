export default function Nav({ page, setPage }) {
  const items = [
    { name: "Home", key: "home" },
    { name: "01 Button", key: "button" },
    { name: "02 Toggle", key: "toggle" },
    { name: "03 Mirror", key: "text" },
    { name: "04 Hover", key: "hover" },
    { name: "05 Traffic", key: "traffic" },
    { name: "06 Todo", key: "todo" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",
        background: "rgba(10,15,30,0.8)",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        zIndex: 100,
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      {/* LOGO */}
      <h2 style={{ fontWeight: "900" }}>
        React<span style={{ color: "#facc15" }}>Lab</span>
      </h2>

      {/* NAV ITEMS */}
      <div style={{ display: "flex", gap: "20px" }}>
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => setPage(item.key)}
            style={{
              background: page === item.key ? "rgba(255,255,255,0.1)" : "transparent",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "8px 14px",
              borderRadius: "10px",
              color: "#aaa",
              cursor: "pointer",
              transition: "0.3s"
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
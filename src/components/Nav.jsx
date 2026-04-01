export default function Nav({ page, setPage }) {
  const pages = ["Home","Button","Toggle","Text","Hover","Traffic","Todo"];

  return (
    <div className="nav">
      {pages.map(p => (
        <button
          key={p}
          className={`nav-btn ${page === p ? "active" : ""}`}
          onClick={() => setPage(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}


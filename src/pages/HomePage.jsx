import { useState } from "react";

export default function HomePage({ setPage }) {
  const cards = [
    { id: 1, label: "Button Lab", emoji: "🎨", desc: "Color-prop buttons", color: "#FF6B6B", page: "button" },
    { id: 2, label: "Day & Night", emoji: "🌙", desc: "Animated theme", color: "#A855F7", page: "toggle" },
    { id: 3, label: "Live Mirror", emoji: "✍️", desc: "Text mirroring", color: "#4ECDC4", page: "text" },
    { id: 4, label: "Color Div", emoji: "🖱️", desc: "Hover effect", color: "#F97316", page: "hover" },
    { id: 5, label: "Traffic Light", emoji: "🚦", desc: "Switch logic", color: "#84CC16", page: "traffic" },
    { id: 6, label: "Todo List", emoji: "📝", desc: "Dynamic list", color: "#EC4899", page: "todo" },
  ];

  return (
    <div className="page">

      {/* FLOATING ORBS */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            width: `${120 + i * 40}px`,
            height: `${120 + i * 40}px`,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${
              ["#FF6B6B","#A855F7","#4ECDC4","#F97316","#FFE66D","#EC4899"][i]
            }33, transparent)`,
            top: `${[10,60,30,70,20,80][i]}%`,
            left: `${[5,80,50,15,90,40][i]}%`,
            animation: `float ${3 + i}s ease-in-out infinite`,
            zIndex: 0
          }}
        />
      ))}

      <div style={{
        position:"relative",
        zIndex:1,
        maxWidth:"1100px",
        margin:"0 auto",
        padding:"2rem"
      }}>

        {/* HERO */}
        <div style={{textAlign:"center", marginBottom:"3rem"}}>

          <div style={{
            fontSize:"3rem",
            animation:"float 3s infinite"
          }}>
            ⚛️
          </div>

          <h1 style={{
            fontSize:"4rem",
            fontFamily:"Fredoka One",
            background:"linear-gradient(90deg,#FF6B6B,#FFE66D,#4ECDC4,#A855F7)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent"
          }}>
            React Playground
          </h1>

          <p style={{opacity:0.6}}>
            6 interactive animated components
          </p>

        </div>

        {/* CARDS */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",
          gap:"20px"
        }}>
          {cards.map(c => (
            <Card key={c.id} card={c} setPage={setPage}/>
          ))}
        </div>

      </div>
    </div>
  );
}

function Card({ card, setPage }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      onClick={()=>setPage(card.page)}
      style={{
        background: hover
          ? `linear-gradient(135deg, ${card.color}22, ${card.color}44)`
          : "rgba(255,255,255,0.05)",
        border:`2px solid ${hover ? card.color : "rgba(255,255,255,0.08)"}`,
        borderRadius:"20px",
        padding:"2rem",
        cursor:"pointer",
        transition:"0.3s",
        transform: hover ? "translateY(-10px) scale(1.03)" : "none",
        boxShadow: hover ? `0 20px 50px ${card.color}44` : "none"
      }}
    >
      <div style={{fontSize:"2.5rem"}}>{card.emoji}</div>

      <h2 style={{color:hover ? card.color : "#fff"}}>
        {card.label}
      </h2>

      <p style={{opacity:0.6}}>{card.desc}</p>
    </div>
  );
}
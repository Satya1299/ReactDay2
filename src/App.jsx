import { useState } from "react";

import Nav from "./components/Nav";

import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import TogglePage from "./pages/TogglePage";
import TextPage from "./pages/TextPage";
import HoverPage from "./pages/HoverPage";
import TrafficPage from "./pages/TrafficPage";
import TodoPage from "./pages/TodoPage";

export default function App() {
  const [page, setPage] = useState("home");

  function renderPage() {
    switch (page) {
      case "button":
        return <ButtonPage setPage={setPage} />;
      case "toggle":
        return <TogglePage setPage={setPage} />;
      case "text":
        return <TextPage setPage={setPage} />;
      case "hover":
        return <HoverPage setPage={setPage} />;
      case "traffic":
        return <TrafficPage setPage={setPage} />;
      case "todo":
        return <TodoPage setPage={setPage} />;
      default:
        return <HomePage setPage={setPage} />;
    }
  }

  return (
    <div>
      {/*For Navigation To*/}
      <Nav page={page} setPage={setPage} />
      <div style={{ paddingTop: "80px" }}>{renderPage()}</div>
    </div>
  );
}

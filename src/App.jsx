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

  const renderPage = () => {
    switch (page) {
      case "button": return <ButtonPage />;
      case "toggle": return <TogglePage />;
      case "text": return <TextPage />;
      case "hover": return <HoverPage />;
      case "traffic": return <TrafficPage />;
      case "todo": return <TodoPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <>
      <Nav page={page} setPage={setPage} />
      {renderPage()}
      {/* <TextPage setPage={setPage} /> */}
    </>
  );
}
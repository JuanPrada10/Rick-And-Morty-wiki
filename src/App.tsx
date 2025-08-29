import { Home, Character, Location, Episode } from "./pages";
import { Navbar } from "./components";
import { Routes, Route } from "react-router";

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Character />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/episodes" element={<Episode />} />
      </Routes>
    </section>
  );
}

export default App;

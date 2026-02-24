
import { Routes, Route } from "react-router-dom";
import Projects from "./routes/projects";
import Fullstack from "./routes/projects/fullstack";
import Wordpress from "./routes/projects/wordpress";

import Figma from "./routes/projects/figma";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/projects/fullstack" element={<Fullstack />} />
      <Route path="/projects/wordpress" element={<Wordpress />} />
      <Route path="/projects/figma" element={<Figma />} />
    </Routes>
  );
}

export default App;
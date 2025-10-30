import { Routes, Route } from "react-router";
import Game from "../pages/game/game";
import About from "../pages/about";
import Download from "../pages/download";
import Learn from "../pages/learn";
function Grid() {
  return (
    <Routes>
      <Route index element={<Game />} />
      <Route path="download" element={<Download />} />
      <Route path="learn" element={<Learn />} />
      <Route path="about" element={<About />} />

      {/* <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route> */}
    </Routes>
  );
}

export default Grid;

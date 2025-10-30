import "./App.css";
import Game from "./pages/game";
import Profile from "./components/profile";
import AI from "./components/ai";

function App() {
  return (
    <div className="flex w-screen justify-between">
      <Profile></Profile>
      <Game></Game>
      <AI></AI>
    </div>
  );
}

export default App;

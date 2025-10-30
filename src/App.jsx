import "./App.css";
import Profile from "./views/profile";
import AI from "./views/ai";
import Grid from "./views/grid";
import { createContext, useState } from "react";

export const DifficultyContext = createContext(0);
export const GameStartContext = createContext(false);
export const ShowPopupContext = createContext(false);

function App() {
  const [difficultyLevel, updateDifficultyLevel] = useState(0);
  const [started, updateStarted] = useState(0);
  const [showPopup, updateShowPopup] = useState(false);

  return (
    <ShowPopupContext value={{ showPopup, updateShowPopup }}>
      <GameStartContext value={{ started, updateStarted }}>
        <DifficultyContext value={{ difficultyLevel, updateDifficultyLevel }}>
          <div className="flex w-screen justify-between">
            <Profile></Profile>
            <Grid></Grid>
            <AI></AI>
          </div>
        </DifficultyContext>
      </GameStartContext>
    </ShowPopupContext>
  );
}

export default App;

import "./App.css";
import Profile from "./views/profile";
import AI from "./views/ai";
import Grid from "./views/grid";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const DifficultyContext = createContext(0);
export const GameStartContext = createContext(false);
export const ShowPopupContext = createContext(false);

function App() {
  const [difficultyLevel, updateDifficultyLevel] = useState(0);
  const [started, updateStarted] = useState(0);
  const [restart, updateRestart] = useState(0);
  const [showPopup, updateShowPopup] = useState(false);
  const location = useLocation();

  return (
    <ShowPopupContext value={{ showPopup, updateShowPopup }}>
      <GameStartContext
        value={{ started, updateStarted, restart, updateRestart }}
      >
        <DifficultyContext value={{ difficultyLevel, updateDifficultyLevel }}>
          <div
            className={
              location.pathname === "/"
                ? "flex w-screen justify-between"
                : "flex w-screen"
            }
          >
            <Profile></Profile>
            <Grid></Grid>
            {location.pathname === "/" ? <AI></AI> : ""}
          </div>
        </DifficultyContext>
      </GameStartContext>
    </ShowPopupContext>
  );
}

export default App;

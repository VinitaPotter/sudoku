import { useEffect, useState, useContext } from "react";
import "./game.css";
import NumberPad from "./game-numberPad";
import Grid from "./game-grid";
import Difficulty from "./game-difficulty";
import { DifficultyContext, GameStartContext } from "../../App";
import { ShowPopupContext } from "../../App";
function Game() {
  const GameStart = useContext(GameStartContext);
  const Popup = useContext(ShowPopupContext);
  const DifficultyLevel = useContext(DifficultyContext);

  const [initial, updateInitial] = useState([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
  ]);

  const [playableSudoku, updatePlayableSudoku] = useState([]);

  const [curNum, updateCurNum] = useState(0);
  const [warning, updateWarning] = useState(0);
  const [winner, updateWinner] = useState(false);
  const [userData, updateUserData] = useState([]);

  function handleReplay() {
    updateWinner(false);
    GameStart.updateStarted(0);
    updateCurNum(0);
    setInitialData();
  }

  useEffect(() => {
    if (
      GameStart.started === 1 &&
      JSON.stringify(initial) === JSON.stringify(playableSudoku)
    ) {
      updateWinner(true);
    }
  }, [playableSudoku, GameStart.started]);

  function handleCellClick(row, col) {
    // if (GameStart.started === 0) {
    //   console.log("run only here");
    //   GameStart.updateStarted(1);
    // }

    // const blockIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

    updatePlayableSudoku((arr) => {
      return [...arr, (arr[row][col] = curNum)];
    });

    if (initial[row][col] !== curNum) {
      updateWarning(() => col);
      setTimeout(() => {
        updateWarning(() => 0);
        updatePlayableSudoku((arr) => {
          return [...arr, (arr[row][col] = 0)];
        });
      }, 500);
    }
  }

  function setGrid() {
    let clone = JSON.parse(JSON.stringify(initial));
    updatePlayableSudoku(clone);
    let recur = 0;
    let vanish = 40;
    if (DifficultyLevel.difficultyLevel === 1) vanish = 50;
    if (DifficultyLevel.difficultyLevel === 2) vanish = 60;
    const removed_cells = [];
    const remove_number = () => {
      if (recur >= vanish) return;
      const random_row = Math.floor(Math.random() * 9);
      const random_col = Math.floor(Math.random() * 9);

      if (clone[random_row][random_col] === 0) {
        remove_number();
        return;
      }
      clone[random_row][random_col] = 0;
      removed_cells.push(clone[random_row][random_col]);
      recur++;
      remove_number();
    };

    remove_number();

    updatePlayableSudoku(clone);

    // updateUserData((prev) => [...removed_cells]);
  }

  function shuffleData() {
    let initial_clone = initial.map((row) => [...row]);

    const switch_rows = (r1, r2) => {
      const temp_row = [...initial_clone[r1]];
      initial_clone[r1] = [...initial_clone[r2]];
      initial_clone[r2] = [...temp_row];
    };

    const random_one = Math.floor(Math.random() * 9);
    const random_two = Math.floor(Math.random() * 9);

    switch_rows(random_one, random_two);
    return initial_clone;
  }
  function setInitialData() {
    let shuffled_data = shuffleData();
    updateInitial([...shuffled_data]);
    setGrid();
  }

  useEffect(() => {
    setInitialData();
  }, [DifficultyContext.Difficulty, GameStart.started]);

  useEffect(() => {
    if (GameStart.restart) {
      updateWinner(false);
      updateCurNum(0);
      setInitialData();
      GameStart.updateRestart(false);
    }
  }, [GameStart.restart]);

  return (
    <div className="flex flex-col">
      <div>
        {winner ? (
          <>
            <p>Yay!!</p>
            <button onClick={() => handleReplay()}>Replay</button>
          </>
        ) : (
          ""
        )}
      </div>
      {Popup.showPopup ? <Difficulty></Difficulty> : ""}

      <Grid
        grid={playableSudoku}
        userData={userData}
        handleCellClick={handleCellClick}
        warning={warning}
      ></Grid>
      <NumberPad currentNumber={curNum} updateCurrentNumber={updateCurNum} />
    </div>
  );
}

export default Game;

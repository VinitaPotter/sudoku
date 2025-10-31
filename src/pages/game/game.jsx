import { useEffect, useState, useContext } from "react";
import "./game.css";
import NumberPad from "./game-numberPad";
import Grid from "./game-grid";
import Difficulty from "./game-difficulty";
import { DifficultyContext, GameStartContext } from "../../App";
import { ShowPopupContext } from "../../App";

function Game({ canDownload, children }) {
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
  const [warning, updateWarning] = useState([-1, -1]);
  const [winner, updateWinner] = useState(false);
  const [userData, updateUserData] = useState([]);

  function handleReplay() {
    updateWinner(false);
    GameStart.updateStarted(false);
    updateCurNum(0);
    setInitialData();
  }

  useEffect(() => {
    if (
      GameStart.started &&
      JSON.stringify(initial) === JSON.stringify(playableSudoku)
    ) {
      updateWinner(true);
    }
  }, [playableSudoku, GameStart.started]);

  function handleCellClick(row, col, num = 0) {
    updatePlayableSudoku((arr) => {
      const new_grid = arr.map((row) => [...row]);
      new_grid[row][col] = num;
      return new_grid;
    });

    if (initial[row][col] !== num) {
      updateWarning([row, col]);
      DifficultyLevel.updateErrors(++DifficultyLevel.errors);
      setTimeout(() => {
        updateWarning([-1, -1]);
        updatePlayableSudoku((arr) => {
          const new_grid = arr.map((row) => [...row]);
          new_grid[row][col] = 0;
          return new_grid;
        });
      }, 500);
    } else {
      updateUserData((prev) => [...prev, [row, col]]);
    }
  }

  function setGrid(data) {
    let clone = JSON.parse(JSON.stringify(data));
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
        //TODO: CHECK IF SUDOKU HAS UNIQUE SOLUTIONS AFTER REMOVING NUMBER
        return;
      }
      clone[random_row][random_col] = 0;
      removed_cells.push(clone[random_row][random_col]);
      recur++;
      remove_number();
    };

    remove_number();

    updatePlayableSudoku(clone);
  }

  function shuffleData() {
    let initial_clone = initial.map((row) => [...row]);

    const switch_rows = (r1, r2) => {
      const temp_row = [...initial_clone[r1]];
      initial_clone[r1] = [...initial_clone[r2]];
      initial_clone[r2] = [...temp_row];
    };

    const switch_cols = (c1, c2) => {
      for (let i = 0; i < initial_clone.length; i++) {
        let temp_c = initial_clone[i][c1];
        initial_clone[i][c1] = initial_clone[i][c2];
        initial_clone[i][c2] = temp_c;
      }
    };

    const swap_nums = () => {
      const r_one = Math.floor(Math.random() * 9) + 1;
      const r_two = Math.floor(Math.random() * 9) + 1;
      if (r_one === r_two) return;
      for (let i = 0; i < initial_clone.length; i++) {
        let idx1 = initial_clone[i].findIndex((n) => n == r_one);
        let idx2 = initial_clone[i].findIndex((n) => n == r_two);
        if (idx1 !== -1 && idx2 !== -1) {
          initial_clone[i][idx1] = r_two;
          initial_clone[i][idx2] = r_one;
        }
      }
    };

    const randomize = () => {
      for (let i = 0; i < 10; i++) {
        const random_block = Math.floor(Math.random() * 3);
        const start = random_block * 3;
        const random_one = start + Math.floor(Math.random() * 3);
        const random_two = start + Math.floor(Math.random() * 3);
        switch_rows(random_one, random_two);
        switch_cols(random_two, random_one);
        if (random_one !== random_two) swap_nums();
      }
    };

    randomize();

    return initial_clone;
  }
  function setInitialData() {
    let shuffled_data = shuffleData();
    updateInitial([...shuffled_data]);
    setGrid(shuffled_data);
  }

  useEffect(() => {
    setInitialData();
  }, [DifficultyLevel.Difficulty, GameStart.started]);

  useEffect(() => {
    if (GameStart.restart) {
      updateWinner(false);
      updateCurNum(0);
      setInitialData();
      DifficultyLevel.updateErrors(0);
      GameStart.updateRestart(false);
    }
  }, [GameStart.restart]);

  return (
    <div className="mt-auto mb-auto" id="sudoku-grid">
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
        selectedNum={curNum}
        canDownload={canDownload}
      ></Grid>
      {canDownload ? (
        <div>{children}</div>
      ) : (
        <div className="mt-10">
          <NumberPad
            currentNumber={curNum}
            updateCurrentNumber={updateCurNum}
          />
        </div>
      )}
    </div>
  );
}

export default Game;

import { useEffect, useState, useContext } from "react";
import "./game.css";
import NumberPad from "./game-numberPad";
import Grid from "./game-grid";
import Difficulty from "./game-difficulty";
import { GameStartContext } from "../../App";
import { ShowPopupContext } from "../../App";
function Game() {
  const GameStart = useContext(GameStartContext);
  const Popup = useContext(ShowPopupContext);

  const [initial] = useState([
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

  const [curNum, updateCurNum] = useState(0);
  const [warning, updateWarning] = useState(0);
  const [winner, updateWinner] = useState(false);
  const [userData, updateUserData] = useState([]);
  const [valid, updateValid] = useState({
    1: { a1: 0, a2: 0, a3: 0, b1: 0, b2: 0, b3: 0, c1: 0, c2: 0, c3: 0 },
    2: { a4: 0, a5: 0, a6: 0, b4: 0, b5: 0, b6: 0, c4: 0, c5: 0, c6: 0 },
    3: { a7: 0, a8: 0, a9: 0, b7: 0, b8: 0, b9: 0, c7: 0, c8: 0, c9: 0 },
    4: { d1: 0, d2: 0, d3: 0, e1: 0, e2: 0, e3: 0, f1: 0, f2: 0, f3: 0 },
    5: { d4: 0, d5: 0, d6: 0, e4: 0, e5: 0, e6: 0, f4: 0, f5: 0, f6: 0 },
    6: { d7: 0, d8: 0, d9: 0, e7: 0, e8: 0, e9: 0, f7: 0, f8: 0, f9: 0 },
    7: { g1: 0, g2: 0, g3: 0, h1: 0, h2: 0, h3: 0, i1: 0, i2: 0, i3: 0 },
    8: { g4: 0, g5: 0, g6: 0, h4: 0, h5: 0, h6: 0, i4: 0, i5: 0, i6: 0 },
    9: { g7: 0, g8: 0, g9: 0, h7: 0, h8: 0, h9: 0, i7: 0, i8: 0, i9: 0 },
  });
  const [grid, updateGrid] = useState({
    1: { a1: 0, a2: 0, a3: 0, b1: 0, b2: 0, b3: 0, c1: 0, c2: 0, c3: 0 },
    2: { a4: 0, a5: 0, a6: 0, b4: 0, b5: 0, b6: 0, c4: 0, c5: 0, c6: 0 },
    3: { a7: 0, a8: 0, a9: 0, b7: 0, b8: 0, b9: 0, c7: 0, c8: 0, c9: 0 },
    4: { d1: 0, d2: 0, d3: 0, e1: 0, e2: 0, e3: 0, f1: 0, f2: 0, f3: 0 },
    5: { d4: 0, d5: 0, d6: 0, e4: 0, e5: 0, e6: 0, f4: 0, f5: 0, f6: 0 },
    6: { d7: 0, d8: 0, d9: 0, e7: 0, e8: 0, e9: 0, f7: 0, f8: 0, f9: 0 },
    7: { g1: 0, g2: 0, g3: 0, h1: 0, h2: 0, h3: 0, i1: 0, i2: 0, i3: 0 },
    8: { g4: 0, g5: 0, g6: 0, h4: 0, h5: 0, h6: 0, i4: 0, i5: 0, i6: 0 },
    9: { g7: 0, g8: 0, g9: 0, h7: 0, h8: 0, h9: 0, i7: 0, i8: 0, i9: 0 },
  });

  function handleReplay() {
    updateWinner(false);
    GameStart.updateStarted(0);
    updateCurNum(0);
    setInitialData();
  }

  useEffect(() => {
    if (
      GameStart.started === 1 &&
      JSON.stringify(valid) === JSON.stringify(grid)
    ) {
      updateWinner(true);
    }
  }, [grid, GameStart.started]);

  function handleCellClick(block, cell) {
    if (GameStart.started === 0) {
      console.log("run only here");
      GameStart.updateStarted(1);
    }
    updateGrid((grid) => ({
      ...grid,
      [block]: {
        ...grid[block],
        [cell]: curNum,
      },
    }));

    if (valid[block][cell] !== curNum) {
      updateWarning(() => cell);
      setTimeout(() => {
        updateWarning(() => 0);
        updateGrid((prev) => ({
          ...prev,
          [block]: {
            ...prev[block],
            [cell]: 0,
          },
        }));
      }, 500);
    }
  }

  function setGrid() {
    let clone = JSON.parse(JSON.stringify(valid));
    let recur = 0;
    const removed_cells = [];
    const remove_number = () => {
      if (recur >= 40) return;
      const random_row = Math.floor(Math.random() * 9) + 1;
      const random_col = Math.floor(Math.random() * 8) + 1;
      const row = clone[random_row];
      const cell_id = Object.keys(row)[random_col];

      if (row[cell_id] === 0) {
        remove_number();
        return;
      }
      row[cell_id] = 0;
      removed_cells.push(cell_id);
      recur++;
      remove_number();
    };

    remove_number();

    updateGrid(() => ({ ...clone }));
    updateUserData((prev) => [...removed_cells]);
  }
  function setInitialData() {
    let initial_clone = initial.map((row) => [...row]);

    const rows = Object.values(valid);
    const rowKeys = Object.keys(valid);

    for (let i = 0; i < rows.length; i++) {
      const cellKeys = Object.keys(rows[i]);
      for (let j = 0; j < cellKeys.length; j++) {
        const key = cellKeys[j];
        valid[rowKeys[i]][key] = initial_clone[i][j];
      }
    }
    updateValid((valid) => ({
      ...valid,
    }));

    setGrid();
  }

  useEffect(() => {
    setInitialData();
  }, []);

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
        grid={grid}
        userData={userData}
        handleCellClick={handleCellClick}
        warning={warning}
      ></Grid>
      <NumberPad currentNumber={curNum} updateCurrentNumber={updateCurNum} />
    </div>
  );
}

export default Game;

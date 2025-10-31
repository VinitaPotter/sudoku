import Game from "../pages/game/game";
import { useContext } from "react";
import { GameStartContext } from "../App";

function Download() {
  const GameStart = useContext(GameStartContext);

  function handleDownload() {
    GameStart.updateDownloading(true);

    setTimeout(() => {
      const win = window;
      win.print();
      win.close();
      GameStart.updateDownloading(false);
    }, 1);
  }
  return (
    <div className="w-4/5 h-screen content-center">
      <Game canDownload={true} id="sudoku-grid">
        {!GameStart.downloading ? (
          <button
            className={
              "ring-2 mt-8 shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition"
            }
            onClick={() => handleDownload()}
          >
            Download
          </button>
        ) : (
          ""
        )}
      </Game>
    </div>
  );
}

export default Download;

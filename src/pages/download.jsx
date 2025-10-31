import Game from "../pages/game/game";

function Download() {
  function handleGameStart() {
    console.log();
  }
  return (
    <div className="w-4/5 h-screen content-center">
      <Game canDownload={true}>
        <button
          className={
            "ring-2 mt-8 shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition"
          }
          onClick={() => handleGameStart()}
        >
          Download
        </button>
      </Game>
    </div>
  );
}

export default Download;

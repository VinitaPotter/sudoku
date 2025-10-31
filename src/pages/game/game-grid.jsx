function Grid({ grid, userData, handleCellClick, warning, selectedNum }) {
  function handleOnClick(r, c) {
    if (selectedNum) handleCellClick(r, c, selectedNum);
  }
  function handleInput(e, r, c) {
    e.stopPropagation();
    const val = e.target.value;
    if (val) handleCellClick(r, c, Number(val));
  }

  function showWarning(r = -1, c = -1) {
    console.log({ colwarn: r });
    let wr = warning[0];
    let wc = warning[1];
    if (wr < 0 || wc < 0) return;

    if (wr === r || wc === c) return true;

    if (
      (Math.floor(wr / 3) === Math.floor(r / 3)) &
      (Math.floor(wc / 3) === Math.floor(c / 3))
    )
      return true;
  }
  return (
    <div className="w-72 m-auto border-t-2 border-l-2  border-pink-400 ">
      {Object.entries(grid).map((row, rindex) => {
        return (
          <div
            key={rindex}
            className={`nth-[3n]:border-b-2  border-pink-400 flex w-72  `}
          >
            {Object.entries(row[1]).map((col, cindex) => {
              return (
                <div
                  key={col[0]}
                  className={`h-8 w-8  nth-[3n]:border-r-2 border-pink-400  ${
                    showWarning(row[0], col[0])
                      ? "bg-purple-300 opacity-60 text-yellow-500"
                      : ""
                  } ${
                    warning[0] === row[0] && warning[1] === col[0]
                      ? "text-red-500"
                      : ""
                  } ${
                    userData.includes(col[0])
                      ? "text-purple-900 font-medium"
                      : "text-pink-300 font-black"
                  }`}
                >
                  <div className="cell">
                    {col[1] === 0 ? (
                      <div className="">
                        <input
                          readOnly={selectedNum}
                          className="h-8 w-8"
                          type="number"
                          min="1"
                          max="9"
                          onKeyUp={(e) => {
                            handleInput(e, row[0], col[0]);
                          }}
                          onClick={() =>
                            handleOnClick(row[0], col[0], rindex, cindex)
                          }
                        />
                      </div>
                    ) : (
                      <div className=" h-8 w-8 block  content-center">
                        {col[1]}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;

function Grid({ grid, userData, handleCellClick, warning }) {
  return (
    <div className="w-96 m-auto rounded-sm">
      {Object.entries(grid).map((block, index) => {
        return (
          <div
            key={index}
            className={"nth-[3n]:border-b-2 border-r-purple-900 flex w-96  "}
          >
            {Object.entries(block[1]).map((cell) => {
              return (
                <div
                  onClick={() => handleCellClick(block[0], cell[0])}
                  key={cell[0]}
                  className={`h-12 w-12  nth-[3n]:border-r-2 nth-[3n]:border-r-purple-900 ${
                    warning === cell[0] ? "warning" : ""
                  } ${
                    userData.includes(cell[0])
                      ? "text-purple-900 font-medium"
                      : "text-pink-300 font-black"
                  }`}
                >
                  <div className="border block h-full w-full content-center">
                    {cell[1] === 0 ? "" : cell[1]}
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

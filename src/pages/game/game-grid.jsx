function Grid({ grid, userData, handleCellClick, warning }) {
  return (
    <div className="grid grid-rows-3 grid-columns-3 w-96 m-auto border-2 rounded-sm border-purple-900">
      {Object.entries(grid).map((block, index) => {
        return (
          <div
            key={index}
            className={"block w-32 h-32 border border-purple-900"}
            style={{ gridArea: `block-${index}` }}
          >
            {Object.entries(block[1]).map((cell) => {
              return (
                <div
                  onClick={() => handleCellClick(block[0], cell[0])}
                  key={cell[0]}
                  className={` cell ${warning === cell[0] ? "warning" : ""} ${
                    userData.includes(cell[0])
                      ? "text-purple-900 font-medium"
                      : "text-pink-300 font-black"
                  }`}
                >
                  {cell[1] === 0 ? "" : cell[1]}
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

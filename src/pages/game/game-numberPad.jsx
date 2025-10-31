function NumberPad({ currentNumber, updateCurrentNumber }) {
  function handleNumberSelection(num) {
    if (currentNumber === num) updateCurrentNumber(0);
    else updateCurrentNumber(num);
  }
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
        return (
          <div
            onClick={() => handleNumberSelection(num)}
            key={num}
            className={`ring-2 shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition  w-12 h-12 ml-2 border rounded-xl cursor-pointer text-xl ${
              num === currentNumber ? " bg-purple-300 text-white " : ""
            }`}
          >
            <p className="pt-2">{num}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NumberPad;

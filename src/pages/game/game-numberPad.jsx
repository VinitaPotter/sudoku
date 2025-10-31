function NumberPad({ currentNumber, updateCurrentNumber }) {
  function handleNumberSelection(num) {
    if (currentNumber === num) updateCurrentNumber(0);
    else updateCurrentNumber(num);
  }
  return (
    <div className="numberPad ">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
        return (
          <div
            onClick={() => handleNumberSelection(num)}
            key={num}
            className={`w-12 h-12 ml-2 border rounded-full cursor-pointer text-xl ${
              num === currentNumber ? " bg-purple-900 text-white " : ""
            }`}
          >
            <p
              className={`${
                num === currentNumber ? "pt-3 " : "pt-2 hover:pt-4"
              }`}
            >
              {num}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default NumberPad;

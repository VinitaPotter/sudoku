import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import {
  PlayIcon,
  PauseIcon,
  ArrowPathIcon,
  StopIcon,
} from "@heroicons/react/24/outline";

import { GameStartContext } from "../App";
import { ShowPopupContext } from "../App";
import { DifficultyContext } from "../App";

function AI() {
  const GameStart = useContext(GameStartContext);
  const Popup = useContext(ShowPopupContext);
  const DifficultyLevel = useContext(DifficultyContext);

  const levels = ["easy", "medium", "hard"];
  const [isPaused, updateIsPaused] = useState(false);

  function handlePlayAndPause(val) {
    updateIsPaused(val);
  }
  let countRef = useRef(0);
  useEffect(() => {
    if (GameStart.restart) {
      countRef.current.innerHTML = `0:0:00`;
    }
    if (GameStart.started && !isPaused) {
      const interval = setInterval(myTimer, 1000);
      function myTimer() {
        if (countRef.current.innerHTML === "") {
          countRef.current.innerHTML = `0:0:00`;
        } else {
          const [hour, minute, second] = countRef.current.innerHTML.split(":");
          let intSecond = +second;
          let intMinute = +minute;
          let intHour = +hour;

          if (intSecond + 1 === 60) {
            intSecond = 0;
            intMinute = intMinute + 1;
          } else {
            intSecond = intSecond + 1;
          }

          if (intMinute === 60) {
            intMinute = 0;
            intHour = intHour + 1;
          }

          if (intHour + 1 === 24) {
            intSecond = 0;
            intMinute = 0;
            intHour = 0;
          }

          const strSecond = intSecond < 10 ? `0${intSecond}` : intSecond;
          const strMinute = intMinute < 10 ? `0${intMinute}` : intMinute;

          countRef.current.innerHTML = `${intHour}:${strMinute}:${strSecond}`;
        }
      }
      return () => clearInterval(interval);
    }
  }, [GameStart.started, GameStart.restart, isPaused]);
  return (
    <div className="w-1/5 bg-yellow-50 h-screen">
      {GameStart.started ? (
        <div className="flex flex-col justify-evenly h-1/2 mt-42">
          <div>Now playing</div>
          <div>Difficulty: {levels[DifficultyLevel.difficultyLevel]}</div>
          <div className="text-xl ">
            <div className="text-4xl font-medium pt-8" ref={countRef}></div>
          </div>
          <div className="text-red-400 font-semibold">
            Errors: {DifficultyLevel.errors}
          </div>
          <div className="flex justify-around">
            {!isPaused ? (
              <div
                onClick={() => handlePlayAndPause(true)}
                className="text-center cursor-pointer hover:text-purple-900"
              >
                <PauseIcon className="size-6 m-auto cursor-pointer"></PauseIcon>
                <p className="text-[6px] tracking-[6px]">pause</p>
              </div>
            ) : (
              <div
                onClick={() => handlePlayAndPause(false)}
                className="text-center cursor-pointer hover:text-purple-900"
              >
                <PlayIcon className="size-6 m-auto cursor-pointer"></PlayIcon>
                <p className="text-[6px] tracking-[6px]">play</p>
              </div>
            )}
            <div
              onClick={() => GameStart.updateRestart(true)}
              className="text-center cursor-pointer hover:text-purple-900"
            >
              <ArrowPathIcon className="size-6 m-auto cursor-pointer"></ArrowPathIcon>
              <p className="text-[6px] tracking-[6px]">restart</p>
            </div>
            <div
              onClick={() => GameStart.updateStarted(false)}
              className="text-center cursor-pointer hover:text-red-900"
            >
              <StopIcon className="size-6 m-auto cursor-pointer"></StopIcon>
              <p className="text-[6px] tracking-[6px]">Stop</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="m-8 flex flex-col h-screen justify-center">
            <button
              className="shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition mb-8"
              onClick={Popup.updateShowPopup}
            >
              Select difficulty
            </button>
            <button
              className="shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition "
              onClick={() => GameStart.updateStarted(true)}
            >
              Play
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AI;

import { useState, useEffect, useRef } from "react";
import { Tooltip, Whisper } from "rsuite";
import "rsuite/dist/rsuite.css";

const Bar = (props) => {
  const { songPlaytime, songDuration } = props;
  const [playtime, setPlaytime] = useState(songPlaytime);
  const [tooltipValue, setTooltipValue] = useState(playtime);
  const barRef = useRef(null);

  const calculatePlaytimePercentage = () => {
    return (playtime / songDuration) * 100;
  };

  const calculateTimeAtPointer = (event) => {
    const barX = barRef.current.getBoundingClientRect()["x"];
    const pointerX = event.clientX;
    const barWidth = document.getElementById("playtime-bar").offsetWidth;
    setTooltipValue(
      Math.round((pointerX - barX) * (songDuration / barWidth) * 100) / 100
    );
  };

  const goToTime = () => {
    setPlaytime(tooltipValue);
  };

  return (
    <>
      <div className="mx-8 py-4">
        <div className="flex justify-between text-sm text-grey-darker">
          <p>{playtime}</p>
          <p>{songDuration}</p>
        </div>
        <Whisper
          followCursor
          placement="top"
          speaker={<Tooltip>{tooltipValue}</Tooltip>}
        >
          <div>
            <div
              ref={barRef}
              onMouseMove={(event) => calculateTimeAtPointer(event)}
              onClick={goToTime}
              id="playtime-bar"
              className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"
            >
              <div
                className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500"
                style={{ width: `${calculatePlaytimePercentage()}%` }}
              ></div>
            </div>
          </div>
        </Whisper>
      </div>
    </>
  );
};

export default Bar;

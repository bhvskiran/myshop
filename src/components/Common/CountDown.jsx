import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const calculateTimeLeft = () => {
    const difference = new Date("2023-08-06") - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const timerComponent = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    } else {
      return (
        <span className="text-[25px] text-[#32a852]" key={interval}>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    }
  });

  return (
    <div className="">
      {timerComponent.length ? (
        timerComponent
      ) : (
        <span className="text-[red] text-[25px]">Time's up!</span>
      )}
    </div>
  );
};

export default CountDown;

import { useEffect, useState } from "react";

const useCountdown = () => {
  const [countdown, setCountdown] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const parseDateCountdownTomorrow = (date: Date) => {
    const hoursLeft = 24 - date.getHours();
    const minutesLeft = 59 - date.getMinutes();
    const secondsLeft = 59 - date.getSeconds();

    return `${hoursLeft}:${
      minutesLeft >= 10 ? minutesLeft : `0${minutesLeft}`
    }:${secondsLeft >= 10 ? secondsLeft : `0${secondsLeft}`}`;
  };

  return parseDateCountdownTomorrow(countdown);
};

export default useCountdown;

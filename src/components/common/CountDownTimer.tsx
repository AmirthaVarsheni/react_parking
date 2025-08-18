import { useState, useEffect } from "react";

interface Timerprops {
  Duration: number;
  onExpire: () => void;
  onSend?: (value: boolean) => void; // optional callback
}

const CountDownTimer: React.FC<Timerprops> = ({ Duration, onExpire, onSend }) => {
  const [timeLeft, setTimeLeft] = useState(Duration);

  useEffect(() => {
    let timer = Duration;
    setTimeLeft(timer);

    const intervalID = setInterval(() => {
      timer -= 1;
      setTimeLeft(timer);
      console.log(timer);
      if (timer <= 0) {
        onExpire();
        if (onSend) onSend(true);
        clearInterval(intervalID);
      }
    }, 1000);
    // cleanup on unmount
    return () => clearInterval(intervalID);
  }, [Duration, onExpire, onSend]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return <div>{timeLeft > 0 ? formatTime(timeLeft) : "00:00"}</div>;
};

export default CountDownTimer;

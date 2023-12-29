import React, { useState, useEffect } from 'react';
import './countdown.css';

const CountdownTimer: React.FC = () => {
  const initialTime: number = 24 * 60 * 60;
  const [timeRemaining, setTimeRemaining] = useState<number>(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number): string => {
    const hours: number = Math.floor(time / 3600);
    const minutes: number = Math.floor((time % 3600) / 60);
    const seconds: number = time % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <div><img id="flashsales" src="https://i.postimg.cc/ZRqm77sb/Frame-626.png" alt="App" /></div>
      <p className="timer">{formatTime(timeRemaining)}</p>
    </div>
  );
};

export default CountdownTimer;

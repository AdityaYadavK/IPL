import { useState, useEffect } from "react";

function Countdown() {
  const target = new Date("2026-03-22T19:30:00"); // match time

  const [time, setTime] = useState(target - new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(target - new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((time / (1000 * 60)) % 60);
  const secs = Math.floor((time / 1000) % 60);

  return (
    <p className='text-6xl flex justify-center items-center text-red-600'>
      {days} D {hours} H {mins} M {secs} S
    </p>
  );
}

export default Countdown;

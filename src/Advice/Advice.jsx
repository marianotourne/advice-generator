import line from "../images/pattern-divider-desktop.svg";
import icon from "../images/icon-dice.svg";
import { useState, useEffect } from "react";

export const Advice = () => {
  const [advice, setAdvice] = useState(null);

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="flex flex-col">
      {advice && (
        <>
          <div className="bg-dark-grayish-blue w-[460px] h-80 text-center rounded-3xl p-10 flex flex-col justify-around">
            <div className="text-neon-green font-bold tracking-widest text-xs">
              {`ADVICE #${advice?.id}`}
            </div>
            <div className="text-light-cyan font-bold text-2xl">
              {`"${advice?.advice}"`}
            </div>
            <img src={line} alt="line" className="w-full" />
          </div>
          <button
            className="rounded-full h-16 w-16 bg-neon-green flex justify-center items-center relative bottom-8 left-[198px] hover:shadow-neon-green hover:shadow-neon-green/80 transition-shadow duration-300"
            onClick={fetchAdvice}
          >
            <img src={icon} alt="icon" className="w-6" />
          </button>
        </>
      )}
    </div>
  );
};

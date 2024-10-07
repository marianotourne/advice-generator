/* eslint-disable react/prop-types */
import line from "../images/pattern-divider-desktop.svg";
import icon from "../images/icon-dice.svg";

export const Advice = ({ advice }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-dark-grayish-blue w-11/12 h-80 text-center rounded-3xl p-10 flex flex-col justify-around md:w-[460px]">
        <div className="text-neon-green font-bold tracking-widest text-xs">
          {`ADVICE #${advice.id}`}
        </div>
        <div className="text-light-cyan font-bold text-2xl">
          {`"${advice.advice}"`}
        </div>
        <img src={line} alt="line" className="w-full" />
      </div>
      <button
        className="rounded-full h-16 w-16 bg-neon-green flex justify-center items-center relative bottom-8 hover:shadow-neon-green hover:shadow-neon-green/80 transition-shadow duration-300"
        onClick={() => {
          console.log("clic");
        }}
      >
        <img src={icon} alt="icon" className="w-6" />
      </button>
    </div>
  );
};

import { Advice } from "./Advice/Advice";
// import { useFetch } from "./useFetch";

function App() {
  // const data = useFetch("https://api.adviceslip.com/advice");

  return (
    <div className="h-screen bg-dark-blue flex justify-center items-center font-manrope">
      <Advice />
    </div>
  );
}

export default App;

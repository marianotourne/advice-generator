import { Advice } from "./Advice/Advice";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="h-screen bg-dark-blue flex justify-center items-center font-manrope flex-col">
      <Advice />
      <Footer />
    </div>
  );
}

export default App;

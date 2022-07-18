import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function plus() {
    setCount((prevCount) => prevCount + 1);
  }
  function minis() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center col text-red-500">
        Hello world!
      </h1>
      <br />
      <div className="flex justify-center">
        <button
          onClick={plus}
          className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
        >
          +
        </button>
        <span className=" text-3xl p-2">{count}</span>
        <button
          onClick={minis}
          className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded"
        >
          -
        </button>
      </div>
    </>
  );
}

export default App;

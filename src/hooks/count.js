import React from 'react'
import { useState } from 'react'

const Count = () => {

    const [count, setCount] = useState(0)
    function plus() {
        setCount((prevCount) => prevCount + 1 ) 
    }
    function minis() {
        setCount((prevCount) => prevCount - 1)
    }

return (
  <div className="flex content-center items-center flex-col  bg-blue-300 p-2 m-3 rounded content-between">
    <div className="flex">
      <button
        onClick={() => {
          plus();
        }}
        className="
          w-[4rem] 
          bg-green-500 
          hover:bg-green-700 
          text-black 
          text-3xl 
          py-2 
          px-4 
          rounded
          flex
          justify-center"
      >
        +
      </button>

      <span className=" text-4xl p-2"> {count}</span>

      <button
        onClick={() => {
          minis();
        }}
        className="
          w-[4rem] 
          bg-red-500 
          hover:bg-red-700 
          text-black 
          font-bold 
          py-2
          px-4 
          rounded 
          text-3xl
          flex
          justify-center"
      >
        -
      </button>
    </div>
  </div>
);
}

export default Count

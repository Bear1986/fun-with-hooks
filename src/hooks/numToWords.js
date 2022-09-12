import React from 'react'
import { useState } from 'react'

const NumToWords = () => {
    //make a counter that converts input number to words with an onClick
    
    //state for the integers to be converted to words
    const [num, setNum] = useState(0)
    function plus () {
        setNum((prevNum) => prevNum + 1)
    }
    function minis() {
        setNum((prevNum) => prevNum - 1)
    }
//state for the input
    var converter = require('number-to-words');

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
        <div className="flex  justify-center p-2 pt-3 text-xl font-bold text-[2rem]">
          {converter.toWords(num)}
        </div>
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

export default NumToWords
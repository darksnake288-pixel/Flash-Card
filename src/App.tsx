import React from 'react'
import { useState } from 'react'

const App = () => {
  const percentage = Math.round((5 / 20) * 100);
  const [showAnswer, setShowAnswer] = useState(false);
  const [content, setContent] = useState('What is the deifferent between var,let and const?');

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
    if (showAnswer) {
      setContent('The difference between var, let, and const is that var is function-scoped, let is block-scoped, and const is block-scoped and immutable.');
    } else {
      setContent('What is the deifferent between var,let and const?');
    }
    
  };
  
  return (
    <div className="py-6 px-4 sm:py-10 sm:px-20">
      <div>
        {/**Title is Here */}
        <h1 className="font-semibold text-3xl">Flash Card</h1>
      </div>

      <div className="flex items-center justify-between w-full p-1.5 border border-gray-300 rounded-2xl bg-white shadow-inner">
        {/* الجزء الأيسر: الشريط والنسبة */}
        <div className="flex items-center gap-3 flex-1">
          <div 
            className="h-7 bg-gray-300 rounded-xl transition-all duration-300"
            style={{ width: `${percentage}%`, minWidth: '8px' }}
          />
          <span className="text-xs font-bold text-gray-700 whitespace-nowrap">
            {percentage}%
          </span>
        </div>

        {/* الجزء الأيمن: النص العدد الكلي */}
        <span className="text-xs font-semibold text-gray-800 px-3">
          {5} of {20}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center">
        {/**Card is Here */}
        <div className="flex flex-col items-center justify-center pb-10 gap-3 p-5 border border-gray-300 rounded-2xl bg-white shadow-inner w-full max-w-125">
          <div>
            <h1 className="text-xl sm:text-3xl font-semibold text-gray-800 space-x-1 text-center break-words">
              {content}
            </h1>
          </div>
          <div className="flex flex-wrap items-around justify-center gap-3 w-full pt-10">
            <button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer active:animate-ping">
              Previous
            </button>
            <button onClick={handleShowAnswer} className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer active:animate-ping ">
              Show Answer
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer active:animate-ping">
              Next
            </button>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default App
import React,{useState} from 'react'

const Reaction = () => {
    const [smileState, setSmileState] = useState(null); // 1: very_satisfied, 2: neutral, 3: very_dissatisfied
    const [starState, setStarState] = useState(0); // 0: none, 1: outline, 2: half, 3: full

    const handleSmileClick = (state) => {
        setSmileState(state);
      };
    
      const handleStarClick = (state) => {
        setStarState(state);
      };
  return (
    <div>
        <div className="flex justify-between items-center px-4 mb-4 w-full">
                <div className="flex">
                  <i className="material-icons mr-2 text-red-600">favorite_border</i>
                  <i className="material-icons text-blue-600">remove_red_eye</i>
                </div>
       <div className="flex">
                  <i 
                    className={`material-icons ml-2 ${smileState === 1 ? 'text-yellow-600' : 'text-gray-500'}`}
                    onClick={() => handleSmileClick(1)}
                  >sentiment_very_satisfied</i>
                  <i 
                    className={`material-icons ml-2 ${smileState === 2 ? 'text-yellow-600' : 'text-gray-500'}`}
                    onClick={() => handleSmileClick(2)}
                  >sentiment_neutral</i>
                  <i 
                    className={`material-icons ml-2 ${smileState === 3 ? 'text-yellow-600' : 'text-gray-500'}`}
                    onClick={() => handleSmileClick(3)}
                  >sentiment_very_dissatisfied</i>
                  <i 
                    className={`material-icons ml-2 ${starState === 1 ? 'text-yellow-600' : 'text-gray-500'}`}
                    onClick={() => handleStarClick(1)}
                  >star_outline</i>
                  <i 
                    className={`material-icons ml-2 ${starState === 2 ? 'text-yellow-600' : 'text-gray-500'}`}
                    onClick={() => handleStarClick(2)}
                  >star_half</i>
                  <i 
                    className={`material-icons ml-2 ${starState === 3 ? 'text-yellow-600' : 'text-gray-500'} `}
                    onClick={() => handleStarClick(3)}
                  >star</i>
                </div>
                </div>
    </div>
  )
}

export default Reaction

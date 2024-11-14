import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ChallengePage() {
  const [timeLeft, setTimeLeft] = useState(23);
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 121;
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleChallengeEnd();
    }
  }, [timeLeft]);
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount + 1 >= requiredClicks) {
      handleChallengeEnd(true);
    }
  };

  const handleChallengeEnd = (success = false) => {
    if (success) {
      alert("Congratulations! You did it!");
    } else {
      alert("Time's up! Better luck next time!");
    }

    navigate('/result');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-blue-600 to-black text-white">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="text-4xl font-bold mb-5"
      >
        Challenge Accepted!
      </motion.h2>
      
      <p className="text-xl mb-4">Click the button {requiredClicks} times in {timeLeft} seconds!</p>
      
      <div className="mb-4 text-3xl font-semibold">
        Time Left: {timeLeft}s
      </div>
      
      <div className="mb-4 text-2xl">
        Click Count: {clickCount} / {requiredClicks}
      </div>

      <motion.button
        onClick={handleButtonClick}
        whileTap={{ scale: 0.9 }}
        className="px-8 py-4 bg-yellow-500 text-black rounded-lg font-semibold text-lg "
      >
        Click Me!
      </motion.button>
    </div>
  );
}

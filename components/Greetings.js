
import React, { useState, useEffect } from 'react';

const Greetings = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const hour = currentTime.getHours();
  const username = 'Juan';

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000); // Update time every second

    return function cleanup() {
      clearInterval(timerID); // Cleanup interval on component unmount
    };
  });

  const tick = () => {
    setCurrentTime(new Date());
  };

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const getGreeting = () => {
    if (hour >= 5 && hour < 12) {
      return 'Good morning';
    } else if (hour >= 12 && hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="flex justify-between">
        <div className="Greetings">
          <p className="text-3xl font-bold pr-4">
            {getGreeting()}, <span className="text-maroon">Welcome {username}!👋</span>
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold">
            {currentTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} |{' '}
            {currentTime.toLocaleDateString('en-US', { weekday: 'long' })}, {formattedTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
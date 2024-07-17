import React, { useState, useEffect } from 'react';
import './Clock.css'

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const [name,setName] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime); 

      const currentHour = currentTime.getHours();
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting(`Good Morning ${name}!`);
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting(`Good Afternoon ${name}!`);
      } else {
        setGreeting(`Good Evening ${name}!`);
      }
    }, 1000);

    return () => {
      clearInterval(interval); 
    };
  }, [name]);

  const handleNameChange = (e) => {
    setName(e.target.value); 
};

  return (
    <div>
    <h3 className='ch3'>{greeting}</h3>
    <div className='inputname'>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      </div>
    <div className='clock-container'>
      <h2 className='ch1'>Current Time:</h2>
      <p className='cp'>{time.toLocaleTimeString()}</p>
      </div>
    </div>
    
  );
};

export default Clock;
import React,{ useState, useEffect} from 'react'
import './Home.css'
import AnimatedLine from '../AnimatedLine';

const Home =() => {
  const [welcomeMessage,setWelcomeMessage] = useState('Welcome to ProFitness!');

  useEffect(() => {
    document.title = "ProFitness - Home";
  },[]);

  const handleInputChange = (event) => {
    setWelcomeMessage(event.target.value);
  };

  return (
    <div className='home'>
      <div className='welcome'>
      <AnimatedLine />
      <h1 className='wh1'>WELCOME TO PROFITNESS</h1>
      <h2 className='wh2'>Your Journey to a Healthier, Happier You Starts Here</h2>
      <p className='wp'>At FitLife, we believe that everyone deserves the opportunity to achieve their fitness goals and live their best life. Whether you’re just beginning your fitness journey or looking to take your training to the next level, we’re here to support you every step of the way.
      </p><p className='wp'>
      Our mission is to empower you with the tools, knowledge, and community needed to transform your health and wellness. With personalized plans, expert advice, and a supportive environment, your goals are within reach.
      </p>
    </div>
      <h1>{welcomeMessage}</h1>
      <input 
        type='text'
        placeholder='Update welcome message'
        onChange={handleInputChange}
      />
      <p>asda
        asdasd
        asdasda
        asdasda
      </p>
    </div>
  )
}

export default Home

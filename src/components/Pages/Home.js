import React from 'react'
import './Home.css'
import AnimatedLine from '../AnimatedLine';
import { useSpring, animated } from 'react-spring';
import Clock from './Clock';

const Home =() => {
  

  const textStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });


  return (
    <div className='home'>
      <div className='welcome'>
      <AnimatedLine />
      <animated.div style={textStyles} className="text-container">
      <h1 className='wh1'>Welcome to ProFitness!</h1>
      <h2 className='wh2'>Your Journey to a Healthier, Happier You Starts Here</h2>
      <p className='wp'>At ProFitness, we believe that everyone deserves the opportunity to achieve their fitness goals and live their best life. Whether you’re just beginning your fitness journey or looking to take your training to the next level, we’re here to support you every step of the way.
      </p><p className='wp'>
      Our mission is to empower you with the tools, knowledge, and community needed to transform your health and wellness. With personalized plans, expert advice, and a supportive environment, your goals are within reach.
      </p>
      <Clock/>
      </animated.div>
    </div>
    
      
      
    </div>
  )
}

export default Home

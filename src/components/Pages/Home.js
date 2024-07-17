import React,{ useState, useEffect} from 'react'
import './Home.css'

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

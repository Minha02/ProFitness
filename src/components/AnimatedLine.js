import React from 'react'
import { useSpring, animated} from 'react-spring';
import './AnimatedLine.css'

const AnimatedLine = () => {
    const styles = useSpring({
        from: { width: '0%' },
        to: { width: '100%' },
        config: { duration: 2000 },  // Adjust the duration as needed
      });
    
      return (
        <div className="line-container">
          <animated.div className="line" style={styles}></animated.div>
        </div>
      );
}

export default AnimatedLine

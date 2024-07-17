import React from 'react'
import { useSpring, animated} from 'react-spring';

const AnimatedLine = () => {
    const props= useSpring({width: '100%', from:{ width:'0%'}});

  return (
    <div style={{width:'100%', height:'4px',background:'#e0e0e0'}}>
      <animated.div style={{...props, height:'4px',background:'#3498db'}}/>
    </div>
  )
}

export default AnimatedLine

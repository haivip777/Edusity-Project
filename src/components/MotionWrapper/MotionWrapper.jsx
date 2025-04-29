import React from 'react'
import { motion as Motion } from 'framer-motion'

const MotionWrapper = ({ children, direction = 'left', duration = 1, delay = 0.1 }) => {
  let initialPosition = {}
  let animatePosition = {}

  switch (direction) {
    case 'left':
      initialPosition = { x: '-100vw' }
      animatePosition = { x: 0 }
      break
    case 'right':
      initialPosition = { x: '100vw' }
      animatePosition = { x: 0 }
      break
    case 'up':
      initialPosition = { y: '100vh' }
      animatePosition = { y: 0 }
      break
    case 'down':
      initialPosition = { y: '-100vh' }
      animatePosition = { y: 0 }
      break
    default:
      initialPosition = { x: '-100vw' }
      animatePosition = { x: 0 }
  }

  return (
    <Motion.div
      initial={{ ...initialPosition, opacity: 0 }}
      animate={{ ...animatePosition, opacity: 1 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      viewport={{ once: false}} 
>
      {children}
    </Motion.div>
  )
}

export default MotionWrapper

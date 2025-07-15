'use client'

import { useEffect, useState } from 'react'

export default function Bubbles() {
  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    const count = 30
    const generated = Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setBubbles(generated)
  }, [])

  return (
    <div className="bubble-container absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

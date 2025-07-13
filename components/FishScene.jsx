'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import FishModel from './FishModel'

export default function FishScene() {
  return (
    <Canvas camera={{ position: [2, -2, 5], fov: 70 }}>
      <ambientLight color={'#001bbd'} intensity={15} />
      <directionalLight position={[12, 8, 5]} intensity={1} />
      <FishModel scale={1.5} position={[2,-2,0]}/>
      <OrbitControls/>
    </Canvas>
  )
}

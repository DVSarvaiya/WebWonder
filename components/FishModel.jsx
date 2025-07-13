'use client'

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FishModel({ scale = 1, position = [0, 0, 0], ...props }) {
  const group = useRef()
  const gltf = useGLTF('/models/jellyfish.glb')
  const { actions, names } = useAnimations(gltf.animations, gltf.scene)

  useEffect(() => {
    if (actions && names.length > 0) {
      actions[names[0]]?.play()
    }
  }, [actions, names])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      group.current.position.y = position[1] + Math.sin(t * 1.5) * 0.1 // float up/down
      group.current.rotation.y += 0.002 // slow spin
    }
  })

  return (
    <group ref={group} scale={scale} position={position} {...props}>
      <primitive object={gltf.scene} />
    </group>
  )
}

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const SecondScene = () => {
    const { nodes, materials } = useGLTF('/models/ring_box.glb')
  return (
    <>
      <group dispose={null} scale={0.015}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box_Box_0.geometry}
        material={materials.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pillow_Pillow_0.geometry}
        material={materials.Pillow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Light_Light_0.geometry}
        material={materials.Light}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diamond_Heart_Diamond_Heart1_0.geometry}
        material={materials.Diamond_Heart1}
        position={[-10.069, 10.15, 15.292]}
        rotation={[-1.212, 0, 0]}
        scale={6.622}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diamond1_Diamond1_0.geometry}
        material={materials.Diamond1}
        position={[-10.069, 10.15, 15.292]}
        rotation={[-1.212, 0, 0]}
        scale={6.622}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring_Heart_Ring_Heart_0.geometry}
        material={materials.Ring_Heart}
        position={[-10.069, 10.15, 15.292]}
        rotation={[-1.212, 0, 0]}
        scale={6.622}
      />
    </group>
    </>
  )
}

export default SecondScene

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { CylinderGeometry, DoubleSide, MeshBasicMaterial } from "three";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const ThirdScene = () => {
  const { nodes, materials } = useGLTF("/models/leather_bag.glb");
   const texture = useLoader(THREE.TextureLoader, "/data/IMG.png");
  return (
    <>
      <group dispose={null}>
        <group position={[0, -0.045, 0]} scale={0.5}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Material}
            position={[0, 0.033, 0]}
            rotation={[-0.077, 0, 0]}
            scale={[0.599, 0.599, 0.215]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.Material}
            position={[0, 0.084, 0.037]}
            rotation={[0.247, -0.006, -0.024]}
            scale={[0.744, 0.744, 0.201]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials["Material.003"]}
            position={[-0.29, -0.879, 0.171]}
            rotation={[0.108, -0.07, 3.105]}
            scale={0.231}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials["Material.003"]}
            position={[-0.014, -0.038, -0.452]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.118, 0.205, 0.205]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials["Material.001"]}
            position={[0, 0.033, 0]}
            scale={0.744}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.Material}
            position={[-0.014, 0.834, 0.356]}
            scale={[0.844, 0.744, 0.744]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials["Material.002"]}
            position={[-0.003, 0.252, 0.45]}
            rotation={[1.465, 0, 0]}
            scale={0.063}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials["Material.002"]}
            position={[-0.938, 0.367, 0.044]}
            rotation={[1.449, -0.044, 1.542]}
            scale={0.033}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials["Material.002"]}
            position={[0.938, 0.374, 0.023]}
            rotation={[-1.867, -0.049, -1.51]}
            scale={0.033}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials["Material.002"]}
            position={[-0.004, 0.249, 0.422]}
            rotation={[1.538, 0, 0]}
            scale={[0.067, 0.025, 0.067]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_25.geometry}
            material={materials["Material.002"]}
            position={[-0.005, 0.241, 0.392]}
            rotation={[1.552, 0, Math.PI]}
            scale={[-0.083, 0.005, 0.083]}
          />
        </group>
      </group>
      <mesh scale={2.2}>
        <cylinderGeometry args={[4, 4, 2.5, 60,1, true]} />
        <meshBasicMaterial  side={DoubleSide}  map={texture}  transparent={true} />
      </mesh>
    </>
  );
};

export default ThirdScene;

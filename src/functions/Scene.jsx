import React from "react";
import { useGLTF } from "@react-three/drei";

const Scene = () => {
  const { nodes, materials } = useGLTF('/models/ring.glb')
  return (
    <group  dispose={null}>
      <group rotation={[-2.414, -0.028, -0.005]} scale={0.4}>
        <group rotation={[Math.PI / 3, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_Material006_0.geometry}
            material={materials['Material.006']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Gem_Material002_0.geometry}
            material={materials['Material.002']}
            position={[0, 0, 126.267]}
            scale={25.13}
          />
        </group>
      </group>
    </group>
  );
};


export default Scene;



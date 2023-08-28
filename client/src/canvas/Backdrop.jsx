import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
      ref={shadows}
      scale={10}
      frames={60}
      alphaTest={0.85}
      temporal
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={2}
        ambient={0.25}
        position={[4, 5, -10]}
      />

      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.5}
        ambient={0.25}
        position={[-2, 5, -11]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;

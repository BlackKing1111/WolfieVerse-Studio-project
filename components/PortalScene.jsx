// components/PortalScene.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function PortalRing() {
  const ringRef = useRef();

  useFrame((state, delta) => {
    ringRef.current.rotation.z += delta * 0.4;
    ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3, 0.25, 32, 200]} />
      <meshStandardMaterial
        color={"#00aaff"}
        emissive={"#0088ff"}
        emissiveIntensity={2}
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}

function EnergyCore() {
  const coreRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    coreRef.current.scale.setScalar(1 + Math.sin(t * 3) * 0.15);
  });

  return (
    <mesh ref={coreRef}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color={"#66ccff"}
        emissive={"#33bbff"}
        emissiveIntensity={3}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const count = 200;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#88ccff"
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function PortalScene() {
  return (
    <div style={{ height: "100vh", width: "100vw", background: "black" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 55 }}>
        <color attach="background" args={["#000000"]} />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#66ccff" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#0044ff" />

        {/* Portal */}
        <PortalRing />
        <EnergyCore />
        <FloatingParticles />

        {/* Optional: User controls */}
        <OrbitControls enableZoom={false} />

        {/* Enter Button */}
        <Html center>
          <button
            style={{
              padding: "14px 28px",
              background: "#00aaff",
              border: "none",
              borderRadius: "8px",
              color: "white",
              fontSize: "1.2rem",
              cursor: "pointer",
              marginTop: "260px",
            }}
            onClick={() => {
              window.location.href = "/marketplace/entry";
            }}
          >
            Enter WolfieVerse
          </button>
        </Html>
      </Canvas>
    </div>
  );
}

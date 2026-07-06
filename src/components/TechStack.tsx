import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const techStacks = [
  "React Native",
  "JavaScript",
  "TypeScript",
  "Angular",
  "HTML5",
  "CSS3",
  "Ionic",
  "Expo",
  "Redux",
  "Axios",
  "REST API",
  "GraphQL",
  "Zustand",
  "Jotai",
  "React Query",
  "SQLite",
  "Drizzle ORM",
  "WatermelonDB",
  "Android Studio",
  "Xcode",
  "VS Code",
  "Git",
  "Jira",
  "Zoho",
];

const textureColors = [
  "#5eead4",
  "#f7df1e",
  "#3178c6",
  "#dd0031",
  "#e34f26",
  "#1572b6",
  "#3880ff",
  "#111827",
  "#764abc",
  "#671ddf",
  "#22c55e",
  "#e10098",
  "#4338ca",
  "#111827",
  "#ff4154",
  "#3b82f6",
  "#c084fc",
  "#38bdf8",
  "#34a853",
  "#147efb",
  "#007acc",
  "#f05032",
  "#0052cc",
  "#d9232e",
];

const createTechTexture = (label: string, color: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;

  const context = canvas.getContext("2d")!;
  context.fillStyle = "#050810";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const gradient = context.createRadialGradient(256, 180, 40, 256, 256, 300);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, "#0a0e17");
  context.fillStyle = gradient;
  context.globalAlpha = 0.9;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.globalAlpha = 1;

  context.strokeStyle = "rgba(255, 255, 255, 0.22)";
  context.lineWidth = 10;
  context.beginPath();
  context.arc(256, 256, 218, 0, Math.PI * 2);
  context.stroke();

  const words = label.split(" ");
  const lines =
    label.length > 11 && words.length > 1
      ? [words.slice(0, -1).join(" "), words[words.length - 1]]
      : [label];

  context.fillStyle = "#ffffff";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = `${lines.length > 1 ? 58 : label.length > 9 ? 56 : 72}px Geist, Arial, sans-serif`;

  lines.forEach((line, index) => {
    const offset = (index - (lines.length - 1) / 2) * 70;
    context.fillText(line, 256, 256 + offset, 400);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;

  return texture;
};

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(30)].map((_, index) => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
  materialIndex: index % techStacks.length,
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const materials = useMemo(() => {
    return techStacks.map((label, index) => {
      const texture = createTechTexture(
        label,
        textureColors[index % textureColors.length]
      );

      return new THREE.MeshPhysicalMaterial({
        map: texture,
        emissive: "#ffffff",
        emissiveMap: texture,
        emissiveIntensity: 0.3,
        metalness: 0.35,
        roughness: 0.85,
        clearcoat: 0.25,
      });
    });
  }, []);

  return (
    <div className="techstack">
      <h2> My Tech Stack</h2>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map(({ materialIndex, ...props }, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[materialIndex]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;

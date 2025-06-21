"use client"

import type React from "react"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Dynamically import Canvas with no SSR
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20" />,
})

const OrbitControls = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.OrbitControls })), {
  ssr: false,
})

const Float = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.Float })), {
  ssr: false,
})

interface ClientOnlyCanvasProps {
  children: React.ReactNode
  camera?: any
  className?: string
}

export default function ClientOnlyCanvas({ children, camera, className }: ClientOnlyCanvasProps) {
  return (
    <div className={className}>
      <Canvas camera={camera}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {children}
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export { Float }

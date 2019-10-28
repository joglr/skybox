import {
  Canvas,
  useFrame,
  extend,
  useRender,
  useThree
} from 'react-three-fiber'
import React, { useRef } from 'react'
import './App.css'
import { Vector3, Euler } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
extend({ OrbitControls })

function App() {
  return (
    <Canvas
      style={{
        width: '100vw',
        height: '100vh'
      }}>
      <Thing />
      <Controls />
    </Canvas>
  )
}

function Thing() {
  // const ref = useRef()
  // useFrame(
  //   () =>
  //     // ref.current.rotation.x =
  //     (ref.current.rotation.y += 0.01)
  // )
  return (
    <>
      <mesh
        // ref={ref}
        onClick={e => {
          debugger
        }}
        position={new Vector3(0, 3, 0)}
        onPointerOver={e => console.log('hover')}
        onPointerOut={e => console.log('unhover')}>
        <boxBufferGeometry attach="geometry" args={[4, 0.1, 1]} />
        <meshNormalMaterial attach="material" />
      </mesh>
      {/* <mesh
        ref={ref}
        onClick={e => {
          debugger
        }}
        position={new Vector3(0, 0, 3)}
        onPointerOver={e => console.log('hover')}
        onPointerOut={e => console.log('unhover')}>
        <boxBufferGeometry attach="geometry" args={[3, 0.25, 5]} />
        <meshNormalMaterial attach="material" />
      </mesh> */}
      <mesh
        // ref={ref}
        onClick={e => {
          debugger
        }}
        position={new Vector3(0, 0, 0)}
        rotation={new Euler(1, 0, 3, 'XYZ')}
        onPointerOver={e => console.log('hover')}
        onPointerOut={e => console.log('unhover')}>
        {/* <boxBufferGeometry attach="geometry" args={[4, 0.1, 1]} /> */}
        <planeGeometry
          // center={new Vector3(0, 0, 0)}
          attach="geometry"
          args={[5, 5]}
        />
        <meshNormalMaterial attach="material" />
      </mesh>
    </>
  )
}

function Controls(props) {
  const ref = useRef()
  const { camera } = useThree()
  useRender(() => ref.current.update())
  return <orbitControls ref={ref} args={[camera]} {...props} />
}

export default App

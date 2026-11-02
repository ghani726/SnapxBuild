'use client'

import { useEffect, useRef } from 'react'

type Vector3 = { x: number; y: number; z: number; set(x: number, y: number, z: number): void }
type Object3D = { rotation: Vector3; position: Vector3 }
type Group = Object3D & { add(object: object): void }
type Scene = { add(...objects: object[]): void }
type Camera = { aspect: number; position: Vector3; updateProjectionMatrix(): void }
type Renderer = { setPixelRatio(value: number): void; setSize(width: number, height: number, updateStyle?: boolean): void; render(scene: Scene, camera: Camera): void; dispose(): void }
type Geometry = { setAttribute(name: string, attribute: object): void }
type ThreeApi = {
  WebGLRenderer: new (options: { canvas: HTMLCanvasElement; alpha: boolean; antialias: boolean }) => Renderer
  Scene: new () => Scene
  PerspectiveCamera: new (fov: number, aspect: number, near: number, far: number) => Camera
  Group: new () => Group
  TorusKnotGeometry: new (radius: number, tube: number, tubularSegments: number, radialSegments: number) => object
  MeshStandardMaterial: new (options: { color: number; metalness: number; roughness: number }) => object
  Mesh: new (geometry: object, material: object) => Object3D
  BufferGeometry: new () => Geometry
  BufferAttribute: new (array: Float32Array, itemSize: number) => object
  PointsMaterial: new (options: { color: number; size: number }) => object
  Points: new (geometry: Geometry, material: object) => Object3D
  AmbientLight: new (color: number, intensity: number) => object
  PointLight: new (color: number, intensity: number, distance: number) => { position: Vector3 }
}

function loadThree() {
  const existing = (window as unknown as { THREE?: ThreeApi }).THREE
  if (existing) return Promise.resolve(existing)

  return new Promise<ThreeApi>((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>('script[data-three-scene]')
    const ready = () => {
      const three = (window as unknown as { THREE?: ThreeApi }).THREE
      if (three) resolve(three)
      else reject(new Error('Three.js did not initialize'))
    }
    if (!script) {
      script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
      script.async = true
      script.dataset.threeScene = 'true'
      script.onload = ready
      script.onerror = () => reject(new Error('Three.js could not be loaded'))
      document.head.appendChild(script)
    } else {
      script.addEventListener('load', ready, { once: true })
      script.addEventListener('error', () => reject(new Error('Three.js could not be loaded')), { once: true })
    }
  })
}

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let disposed = false
    let frame = 0
    let renderer: Renderer | undefined
    let observer: IntersectionObserver | undefined
    let resizeObserver: ResizeObserver | undefined
    let pointerX = 0
    let pointerY = 0
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    loadThree().then((T) => {
      if (disposed) return
      try {
        renderer = new T.WebGLRenderer({ canvas, alpha: true, antialias: true })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        const scene = new T.Scene()
        const camera = new T.PerspectiveCamera(45, 1, 0.1, 100)
        camera.position.z = 5.4
        const group = new T.Group()
        scene.add(group)

        const knot = new T.Mesh(
          new T.TorusKnotGeometry(1, 0.32, 160, 20),
          new T.MeshStandardMaterial({ color: 0x9eeb20, metalness: 0.5, roughness: 0.28 }),
        )
        group.add(knot)

        const particles = new Float32Array(260 * 3)
        for (let i = 0; i < particles.length; i += 1) particles[i] = (Math.random() - 0.5) * 10
        const particleGeometry = new T.BufferGeometry()
        particleGeometry.setAttribute('position', new T.BufferAttribute(particles, 3))
        const points = new T.Points(particleGeometry, new T.PointsMaterial({ color: 0x9eeb20, size: 0.035 }))
        scene.add(points, new T.AmbientLight(0xffffff, 0.6))
        const blueLight = new T.PointLight(0x5b57ff, 2.2, 30)
        blueLight.position.set(4, 3, 4)
        const limeLight = new T.PointLight(0x9eeb20, 1.8, 30)
        limeLight.position.set(-4, -2, 3)
        scene.add(blueLight, limeLight)

        const resize = () => {
          const width = canvas.clientWidth
          const height = canvas.clientHeight
          if (!width || !height) return
          renderer?.setSize(width, height, false)
          camera.aspect = width / height
          camera.updateProjectionMatrix()
        }
        const render = () => {
          if (disposed) return
          const now = performance.now() / 1000
          knot.rotation.x = now * 0.4
          knot.rotation.y = now * 0.55
          points.rotation.y = now * 0.03
          group.rotation.y += (pointerX * 1.4 - group.rotation.y) * 0.05
          group.rotation.x += (pointerY * 0.8 - group.rotation.x) * 0.05
          renderer?.render(scene, camera)
          if (!reducedMotion) frame = window.requestAnimationFrame(render)
        }
        const onPointerMove = (event: PointerEvent) => {
          const bounds = canvas.getBoundingClientRect()
          pointerX = (event.clientX - bounds.left) / bounds.width - 0.5
          pointerY = (event.clientY - bounds.top) / bounds.height - 0.5
        }

        resize()
        resizeObserver = new ResizeObserver(resize)
        resizeObserver.observe(canvas)
        observer = new IntersectionObserver(([entry]) => {
          window.cancelAnimationFrame(frame)
          if (entry.isIntersecting) render()
        })
        observer.observe(canvas)
        canvas.addEventListener('pointermove', onPointerMove)
        canvas.addEventListener('pointerleave', () => { pointerX = 0; pointerY = 0 })
      } catch {
        canvas.setAttribute('aria-label', 'Interactive 3D scene is unavailable in this browser')
      }
    }).catch(() => {
      if (!disposed) canvas.setAttribute('aria-label', 'Interactive 3D scene is unavailable')
    })

    return () => {
      disposed = true
      window.cancelAnimationFrame(frame)
      observer?.disconnect()
      resizeObserver?.disconnect()
      renderer?.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} aria-label="Interactive 3D scene" />
}

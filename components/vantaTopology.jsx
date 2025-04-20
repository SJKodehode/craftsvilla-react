// components/VantaTopology.jsx
'use client'

//not in use, tested different background styles

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import styles from '@/styles/vanta.module.css'

export default function VantaTopology() {
  const ref = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    // Only initialize once, when the scripts are loaded
    if (window.VANTA && !vantaEffect) {
      setVantaEffect(
        window.VANTA.TOPOLOGY({
          el: ref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color: 0xde8f03,
          scaleMobile: 1.0,
          backgroundColor: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'
        })
      )
    }
    // Clean up on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <>
      {/* load P5 first, then Vanta */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js"
        strategy="beforeInteractive"
      />

      {/* the element VANTA will attach to */}
      <div
        ref={ref}
        id="element"
        className={styles.vantaContainer}
      />
    </>
  )
}

'use client';

import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/workshop.module.css'
import Link from 'next/link'
export default function Workshop() {
    const containers = [
        {
            id: 'mosaic', 
            src: '/mainImgs/mosaic.png',
            price: '400 kr',
        },        
        {
            id: 'canvas', 
            src: '/mainImgs/canvas.png',
            price: '300 kr',
        },
        {
            id: 'aquarell', 
            src: '/mainImgs/akvarell.png',
            price: '200 kr'
        },
    ]

    const [active, setActive] = useState(containers[0])

    function handleClick(id) {
        const found = containers.find((c) => c.id === id)
        if (found) setActive(found)
    }
    
    

    return (
        <section className={styles.section}>
          
          <div className={styles.navOptions}>
            {containers.map((c) => (
              <div
                key={c.id}
                onClick={() => handleClick(c.id)}
                className={`${styles.navItem} ${
                  active.id === c.id ? styles.active : ''
                }`}
              >
                <h3>{c.id.toUpperCase()}</h3>
              </div>
            ))}
          </div>
    
          
          <div className={styles.imageContainer}>
            <Image
              src={active.src}
              width={347}
              height={347}
              alt={'Image container carousell'}
            />
            <div className={styles.textBlock}>
              <h2>{active.title}</h2>
              <p className={styles.price}>{active.price}</p>
            </div>
          </div>
        </section>
      )
    }
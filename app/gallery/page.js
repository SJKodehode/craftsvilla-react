// components/ImageGrid.jsx
import Image from 'next/image'
import styles from '../../styles/gallery.module.css'
import Header from '@/components/header'
import VantaTopology from '@/components/vantaTopology'
// A gallery grid that generates x amount of images based on how many "src" i choose to provide //
export default function ImageGrid({ images = [
    '/gallery/img1.png',
    '/gallery/img2.png',
    '/gallery/img3.png',
    '/gallery/img1.png',
    '/gallery/img2.png',
    '/gallery/img3.png',
  ]
   }) {
  return (

    <div className={styles.page}>
    {/* <div id={'element'}></div>
    <VantaTopology /> */}
    <Header />
    <div className={styles.main}>

      <div className={styles.grid}>
      {images.map((src, i) => (
          <div key={i} className={styles.cell}>
          <Image
            src={src}
            alt={`Grid image ${i + 1}`}
            fill
            style={{ objectFit: 'contain' }}
            />
        </div>
      ))}
      </div>
    </div>
    </div>
  )
}

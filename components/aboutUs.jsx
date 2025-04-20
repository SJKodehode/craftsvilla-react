import styles from '@/styles/aboutUs.module.css'
import { Inter } from 'next/font/google'
export default function AboutUs() {
    return(
        <div id={'about'} className={styles.aboutUs}>
            <h2>About Us</h2>
            <p>
                At CRAFTSVILLA, we believe in the power of creativity to bring people together. Whether you’re a parent looking for quality time with your child, friends seeking a fun group activity, or colleagues wanting to build team spirit, our hands‑on workshops offer the perfect blend of art, relaxation, and connection.
            </p>
            <p>
                Our welcoming studios are designed for makers of all ages and skill levels. From painting and pottery to mixed‑media crafts, each session is thoughtfully curated to spark imagination and foster a sense of accomplishment. We supply all the materials—you bring your curiosity!
            </p>    
            <p>
                More than just an art class, CRAFTSVILLA is a community hub where new friendships are formed, laughter is shared, and the everyday stresses of life fade away. Join us and discover how a little color, clay, or collage can transform your free time into unforgettable memories.
            </p>    
            
        </div>
)
}
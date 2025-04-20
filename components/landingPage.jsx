import Link from "next/link"
import styles from "@/styles/page.module.css"
import Image from "next/image"

export default function Landing() {

    return(
        <div className={styles.main}>
      <div className={styles.sectionLeft}>
        <Image 
        src={'/mainImgs/streetArt.png'}
        width={400}
        height={600}
        alt={"street art picture"}
        />
      </div>
      <div className={styles.sectionRight}>
        <h3>Welcome to</h3>
        <h1 className={styles.fontMain}>Craftsvilla.</h1>
        <Link href={'#about'}>
        <div className={styles.sectionOrange}>
          <p>About us</p>
          <div>
            
            <Image
            src={'/mainImgs/arrowLine.svg'}
            width={40}
            height={40}
            alt={'Arrow line img'}
            />
          </div>
        </div>
          </Link>

      </div>
    </div>
    );
}
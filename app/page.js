import Image from "next/image";
import styles from "@/styles/page.module.css";
import Link from "next/link";

import Header from "@/components/header";
import Landing from "@/components/landingPage";
import Workshop from "@/components/workshopOptions";
import AboutUs from "@/components/aboutUs";
import VantaTopology from "@/components/vantaTopology";

// The landing page of the site, where all the main components are loaded. //
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
        <div id={'element'}></div>
        <VantaTopology />
    <main>
     
      <Landing />
    <section className={styles.sectionExplore}>
      <div className={styles.buttonDesign}>
      <Link href={'#about'}>
        <h2>DESIGN <br /> WORKSHOP</h2>
      </Link>
      </div>
      <div className={styles.buttonExplore}>
      <Link href={'#about'}>
        <h2>EXPLORE OUR OPTIONS</h2>
      </Link>
      </div>
      
        <AboutUs />
        <Workshop />
        
    </section>
    </main>
      <section>
        
      </section>
    <footer>
      <div className={styles.nav}>
        <div className={styles.navItem1}></div>
        <div className={styles.navItem2}></div>
      </div>
    </footer>
    
    </div>
  );
}

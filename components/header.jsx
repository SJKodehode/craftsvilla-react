import Link from "next/link";
import styles from "@/styles/page.module.css"

// Header function that i can call in everywhere i need it to be //
export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.nav}>
                <div className={styles.navItem1}>
                <Link href={'/'}>
                    <li className={styles.navBtn}>Home</li>
                </Link>
                </div>
                <div className={styles.navItem2}>
                <Link href={'/booking'}>
                    <li className={styles.navBtn}>Booking</li>
                </Link>
                <Link href={'/feedback'}>
                    <li className={styles.navBtn}>Feedback</li>
                </Link>
                <Link href={'/gallery'}>
                    <li className={styles.navBtn}>Gallery</li>
                </Link>
                </div>
            </div>
            </header>
    );
}



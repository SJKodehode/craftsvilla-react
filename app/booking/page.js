import Header from "@/components/header";
import styles from "../../styles/booking.module.css";

export default function Booking() {
    return(
        <div className={styles.page}>
            <Header />
            <div className={styles.iFrame}>
                <iframe src="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=Europe%2FOslo&showPrint=0&title=Booking&src=c2prb2RlaG9kZTIwMjVAZ21haWwuY29t&src=bm8ubm9yd2VnaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043" width="1270" height="815"></iframe>
            </div>
        </div>
    );
}
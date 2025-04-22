import Header from "@/components/header";
import styles from "@/styles/feedback.module.css";
import Image from "next/image";

// a function that displays the names, text content and amount of stars from a user //

export default function FeedbackGrid({ feedbacks = [
    {name: 'Thomas', text: 'Hello this is a general piece of feedback', amountOfStars: 5},
    {name: 'Wayne', text: 'Hello this is a general piece of feedback', amountOfStars: 4},
    {name: 'Jacob', text: 'Hello this is a general piece of feedback', amountOfStars: 5},
    {name: 'Jacob', text: 'Hello this is a general piece of feedback', amountOfStars: 4},
    {name: 'Jacob', text: 'Hello this is a general piece of feedback', amountOfStars: 3},
    {name: 'Jacob', text: 'Hello this is a general piece of feedback', amountOfStars: 4},
    {name: 'Jacob', text: 'Hello this is a general piece of feedback', amountOfStars: 4},
    {name: 'Jacob', text: 'Hello this is a general piece of feedback', amountOfStars: 4},
    {name: 'Jacob', text: 'Hello this is a general piece of feedback', amountOfStars: 4},
    {name: 'Jacob', text: 'Hello this is a general piece of feedback', amountOfStars: 4},
    {name: 'Jacob', text: 'Hello this is a general piece of feedback', amountOfStars: 4},
]}) {
    return(
        <div className={styles.page}>
            <Header />
            <div className={styles.flexbox}>
                {feedbacks.map((f, i) => (
                    <div key={i} className={styles.cell}>
                        <p>{f.name}</p>
                        <p>{f.text}</p>
                        <div className={styles.starsRow}>
                          {Array.from({ length: f.amountOfStars }).map((_, idx) => (
                            <Image
                              key={idx}
                              src="/icons/star.svg"
                              width={40}
                              height={40}
                              alt="star"
                            />
                          ))}
                        </div>
                    </div>
                ))}
            </div>    
        </div>
    );
}
import styles from "./Card.module.css";
import { CustomCSS, ICard } from "./ICard";

export function Card({ children, count, imageUrl }: ICard) {
    return (
        <div
            className={`${styles.card}`}
            style={{ "--custom-url": `url('${imageUrl}')` } as CustomCSS}
        >
            <h2 className={styles.count}>{count}</h2>
            <p className={styles.title}>{children}</p>
        </div>
    );
}

// style={{
//     backgroundImage: `url('${imageUrl}')`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "100%",
// }}

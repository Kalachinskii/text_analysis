import styles from "./Progress.module.css";

export function Progress() {
    return (
        <li className={styles.li}>
            <span className={styles.letter}>F</span>
            <progress
                className={styles.progress}
                value="16.22"
                max="100"
            ></progress>
            <span className={styles.percent}>6 (16.22%)</span>
        </li>
    );
}

import { IProgress } from "./IProgress";
import styles from "./Progress.module.css";

export function Progress({ letter = "", count, countSymbol }: IProgress) {
    const percent = parseFloat(((count / countSymbol) * 100).toFixed(2));

    return (
        <li className={styles.li}>
            <span className={styles.letter}>{letter.toUpperCase()}</span>
            <progress
                className={styles.progress}
                value="16.22"
                max="100"
            ></progress>
            <span className={styles.percent}>
                {count} ({percent}%)
            </span>
        </li>
    );
}

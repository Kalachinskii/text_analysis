import { IProgress } from "./IProgress";
import styles from "./Progress.module.css";

export function Progress({ letter = "", count, text, isSpaceOff }: IProgress) {
    const percentage = isSpaceOff
        ? parseFloat(
              ((count / text.replace(/\s+/g, "").length) * 100).toFixed(2)
          )
        : parseFloat(((count / text.length) * 100).toFixed(2));

    return (
        <li className={styles.li}>
            <span className={styles.letter}>{letter.toUpperCase()}</span>
            <progress
                className={styles.progress}
                value={percentage}
                max="100"
            ></progress>
            <span className={styles.percent}>
                {count} ({percentage}%)
            </span>
        </li>
    );
}

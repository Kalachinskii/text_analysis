import { ITitle } from "./ITitle";
import styles from "./Title.module.css";

export function Title({ children }: ITitle) {
    return <h1 className={styles.title}>{children}</h1>;
}

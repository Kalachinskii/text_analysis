import { OpenCloseButton } from "../common/OpenCloseButton/OpenCloseButton";
import { Progress } from "../Progress/Progress";
import styles from "./Analysis.module.css";

export function AnalysisBox() {
    return (
        <div className={styles.analysisBox}>
            <h3 className={styles.title}>Letter Density</h3>
            <ul className={styles.ul}>
                <Progress />
                <Progress />
                <Progress />
                <Progress />
                <Progress />
            </ul>
            <OpenCloseButton />
        </div>
    );
}

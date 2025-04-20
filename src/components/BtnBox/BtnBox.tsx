import styles from "./BtnBox.module.css";
import Checkbox from "../Checkbox/Checkbox";

export default function BtnBox() {
    return (
        <div className={styles.btnBox}>
            <Checkbox connec="one">Exclude spaces</Checkbox>
            <Checkbox connec="two">Set character limit</Checkbox>
            <p>Approx. reading time(Avg. 50WPM): &#8250;1 minute</p>
        </div>
    );
}

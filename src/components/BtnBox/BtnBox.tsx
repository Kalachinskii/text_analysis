import { useState } from "react";
import Checkbox from "../common/Checkbox/Checkbox";
import styles from "./BtnBox.module.css";
import { IBtnBox } from "./IBtnBox";

export default function BtnBox({ isChecked, setIsChecked }: IBtnBox) {
    return (
        <div className={styles.btnBox}>
            <Checkbox
                connec="one"
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            >
                Exclude spaces
            </Checkbox>
            {/* <Checkbox connec="two">Set character limit</Checkbox> */}
            <p>Approx. reading time(Avg. 50WPM): &#8250;1 minute</p>
        </div>
    );
}

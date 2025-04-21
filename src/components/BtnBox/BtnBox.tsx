import { useState } from "react";
import Checkbox from "../common/Checkbox/Checkbox";
import styles from "./BtnBox.module.css";
import { IBtnBox } from "./IBtnBox";
import { InputNum } from "../InputNum/InputNum";

export default function BtnBox({
    isSpaceOff,
    setIsSpaceOff,
    limitText,
    setLimitText,
}: IBtnBox) {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <div className={styles.btnBox}>
            <Checkbox
                connec="one"
                isChecked={isSpaceOff}
                setIsChecked={setIsSpaceOff}
            >
                Exclude spaces
            </Checkbox>
            <Checkbox
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                connec="two"
            >
                Set character limit
            </Checkbox>
            {isChecked && (
                <InputNum limitText={limitText} setLimitText={setLimitText} />
            )}
            <p>Approx. reading time(Avg. 50WPM): &#8250;1 minute</p>
        </div>
    );
}

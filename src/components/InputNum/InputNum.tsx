import { useState } from "react";
import styles from "./InputNum.module.css";

export function InputNum() {
    const [limitText, setLimitText] = useState<number | "">("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;

        if (!isNaN(value)) {
            setLimitText(value);
        }
    };

    return (
        <div className={styles.boxCastomInputNumber}>
            <input
                onChange={handleChange}
                value={limitText}
                type="number"
                className={styles.inputNumber}
            />
            <div className={styles.InputBtn}>
                <div
                    className={styles.addBtn}
                    onClick={() => setLimitText((prev) => +prev + 1)}
                >
                    &#9650;
                </div>
                <div
                    onClick={() => setLimitText((prev) => +prev - 1)}
                    className={styles.reduceBtn}
                >
                    &#9660;
                </div>
            </div>
        </div>
    );
}

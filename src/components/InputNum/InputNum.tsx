import styles from "./InputNum.module.css";
import { IInputNum } from "./IInputNum";

export function InputNum({ limitText, setLimitText }: IInputNum) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;

        if (!isNaN(value)) {
            setLimitText(value);
        } else setLimitText("");
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
                    onClick={() => setLimitText(+limitText + 1)}
                >
                    &#9650;
                </div>
                <div
                    onClick={() => setLimitText(+limitText - 1)}
                    className={styles.reduceBtn}
                >
                    &#9660;
                </div>
            </div>
        </div>
    );
}

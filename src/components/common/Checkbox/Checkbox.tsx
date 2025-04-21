import styles from "./Checkbox.module.css";
import { ICheckbox } from "./ICheckbox";

export default function Checkbox({
    children,
    connec,
    isChecked,
    setIsChecked,
}: ICheckbox) {
    return (
        <div className={styles.checkboxBox}>
            <input
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className={styles.checkbox}
                type="checkbox"
                id={connec}
            />
            <label className={styles.label} htmlFor={connec}>
                <span className={styles.fake}></span>
                {children}
            </label>
        </div>
    );
}

import styles from "./Checkbox.module.css";
import { ICheckbox } from "./ICheckbox";

export default function Checkbox({ children, connec }: ICheckbox) {
    return (
        <div className={styles.checkboxBox}>
            <input className={styles.checkbox} type="checkbox" id={connec} />
            <label className={styles.label} htmlFor={connec}>
                <span className={styles.fake}></span>
                {children}
            </label>
        </div>
    );
}

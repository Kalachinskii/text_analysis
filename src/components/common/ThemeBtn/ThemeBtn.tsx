import { IThemeBtn } from "./IThemeBtn";
import styles from "./ThemeBtn.module.css";

export function ThemeBtn({ themeToggle, toggleFunTheme }: IThemeBtn) {
    return (
        <div onClick={toggleFunTheme} className={styles.themeBtn}>
            <img
                className={styles.logoBtn}
                src={`${
                    themeToggle == "light"
                        ? "/image/icon/icon-moon.svg"
                        : "/image/icon/icon-sun.svg"
                } `}
                alt="картинка иконки смены темы"
            />
        </div>
    );
}

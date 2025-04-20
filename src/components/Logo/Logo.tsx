import { useEffect, useState } from "react";
import styles from "./Logo.module.css";

export function Logo() {
    const [themeToggle, setThemeToggle] = useState<string>(() => {
        return localStorage.getItem("theme") || "light";
    });

    // тема - старт страницы
    useEffect(() => {
        document.body.classList.toggle("darkTheme", themeToggle === "dark");
    }, [themeToggle]);

    // тема - кнопка
    const toggleTheme = () => {
        const newTheme = themeToggle === "light" ? "dark" : "light";
        setThemeToggle(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div className={styles.logoBox}>
            <img
                className={styles.logoBtn}
                src={`${
                    themeToggle == "light"
                        ? "/image/logo/logo-light-theme.svg"
                        : "/image/logo/logo-dark-theme.svg"
                } `}
                alt="Картинка логотипа"
            />
            <div onClick={toggleTheme} className={styles.themeBtn}>
                <img
                    src={`${
                        themeToggle == "light"
                            ? "/image/icon/icon-moon.svg"
                            : "/image/icon/icon-sun.svg"
                    } `}
                    alt="картинка иконки смены темы"
                />
            </div>
        </div>
    );
}

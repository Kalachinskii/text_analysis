import { useEffect, useState } from "react";
import styles from "./Logo.module.css";
import { ThemeBtn } from "../common/ThemeBtn/ThemeBtn";

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
            <ThemeBtn toggleFunTheme={toggleTheme} themeToggle={themeToggle} />
        </div>
    );
}

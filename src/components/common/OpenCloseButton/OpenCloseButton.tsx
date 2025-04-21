import { useState } from "react";
import styles from "./OpenCloseButton.module.css";
import { IOpenCloseButton } from "./IOpenCloseButton";

export function OpenCloseButton({ setIsLimit, isLimit }: IOpenCloseButton) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <button
            className={styles.btn}
            onClick={() => {
                setIsOpen(!isOpen), setIsLimit(!isLimit);
            }}
            aria-expanded={isOpen}
        >
            {isOpen ? "Show less" : "See more"}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24" /* Упрощенный viewBox */
                strokeWidth="1.5"
                stroke="currentColor"
                className={`${styles.svg} ${isOpen ? styles.svgRotate : ""}`}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25L12 15.75L4.5 8.25"
                />
            </svg>
        </button>
    );
}

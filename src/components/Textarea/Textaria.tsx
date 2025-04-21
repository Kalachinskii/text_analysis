import { useEffect, useState } from "react";
import { ITextaria } from "./ITextaria";
import styles from "./Textaria.module.css";

export function Textaria({
    name,
    text,
    setText,
    placeholderValue,
    limitText,
}: ITextaria) {
    const [errorLimitText, setErrorLimitText] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (
            typeof limitText === "number" &&
            e.target.value.length < limitText
        ) {
            setText(e.target.value);
            setErrorLimitText(false);
        } else if (
            typeof limitText === "number" &&
            e.target.value.length == limitText
        ) {
            setText(e.target.value);
            setErrorLimitText(true);
        } else if (
            typeof limitText === "number" &&
            e.target.value.length > limitText
        ) {
            setErrorLimitText(true);
        } else if (typeof limitText !== "number") {
            setErrorLimitText(false);
        } else {
            setText(e.target.value);
        }
    };

    useEffect(() => {
        typeof limitText === "number" && limitText > text.length
            ? setErrorLimitText(false)
            : setErrorLimitText(true);
        typeof limitText !== "number" && setErrorLimitText(false);
    }, [limitText, text]);

    return (
        <>
            <textarea
                name={name}
                placeholder={placeholderValue}
                className={`${styles.textInput} ${
                    errorLimitText && styles.error
                }`}
                required
                autoFocus
                value={text}
                onChange={handleInputChange}
            ></textarea>
            {/* error */}
            {errorLimitText && (
                <p className={styles.errorText}>
                    <svg
                        className={styles.svgError}
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 .5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zM6 6h1v4H6zm1-3a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
                            fill="#DA3701"
                        />
                    </svg>
                    Limit reached! Your text exceeds {limitText} characters.
                </p>
            )}
        </>
    );
}

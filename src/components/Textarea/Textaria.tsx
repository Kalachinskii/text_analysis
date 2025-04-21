import { useEffect, useState } from "react";
import { ITextaria } from "./ITextaria";
import styles from "./Textaria.module.css";
import { Error } from "../Error/Error";

export function Textaria({
    name,
    text,
    setText,
    placeholderValue,
    limitText,
}: ITextaria) {
    const [errorLimitText, setErrorLimitText] = useState<boolean>(false);
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;

        if (typeof limitText !== "number") {
            setText(value);
            return;
        }

        if (value.length <= limitText) {
            setText(value);
            setErrorLimitText(value.length === limitText);
        } else {
            // Обрезаем текст до лимита, если превышен
            setText(value.slice(0, limitText));
            setErrorLimitText(true);
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
            {errorLimitText && <Error limitText={limitText} />}
        </>
    );
}

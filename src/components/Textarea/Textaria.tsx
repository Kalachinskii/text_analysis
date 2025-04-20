import { ITextaria } from "./ITextaria";
import styles from "./Textaria.module.css";

export function Textaria({ name, text, setText, placeholderValue }: ITextaria) {
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        <>
            <textarea
                name={name}
                placeholder={placeholderValue}
                className={styles.textInput}
                required
                autoFocus
                value={text}
                onChange={handleInputChange}
            ></textarea>
        </>
    );
}

import styles from "./Error.module.css";

export function Error({ limitText }: { limitText: number | "" | undefined }) {
    return (
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
    );
}

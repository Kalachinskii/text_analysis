import { useEffect, useState } from "react";
import { OpenCloseButton } from "../common/OpenCloseButton/OpenCloseButton";
import { Progress } from "../Progress/Progress";
import styles from "./Analysis.module.css";
import { IAnalysis } from "./IAnalysis";

interface LetterStats {
    symbolCountArr: [string, number][];
    total: number;
    unique: number;
}

export function AnalysisBox({ text, isSpaceOff }: IAnalysis) {
    const [analysisTextData, setAnalysisTextData] =
        useState<LetterStats | null>(null);
    const countProgressCompanents = Array(analysisTextData?.unique).fill(null);
    const [isLimit, setIsLimit] = useState<boolean>(true);

    useEffect(() => {
        const newData = getDetailedLetterStats(text);
        setAnalysisTextData(newData);
    }, [text]);

    const getDetailedLetterStats = (text: string) => {
        const onlyText = text.toLowerCase().replace(/[^a-zа-яё]/g, "");
        const totalLetters = onlyText.length;
        const counts: Record<string, number> = {};

        for (const char of onlyText) {
            counts[char] = (counts[char] || 0) + 1;
        }
        const symbolCountArr = Object.entries(counts).sort(
            (a, b) => b[1] - a[1]
        );

        return {
            symbolCountArr,
            total: totalLetters,
            unique: Object.keys(counts).length,
        };
    };

    return (
        <div className={styles.analysisBox}>
            <h3 className={styles.title}>Letter Density</h3>
            <ul className={styles.ul}>
                {analysisTextData?.unique ? (
                    countProgressCompanents
                        .slice(0, isLimit ? 5 : undefined)
                        .map((_, index) => {
                            const [key, value] =
                                analysisTextData.symbolCountArr[index] || [];

                            return (
                                <Progress
                                    key={key}
                                    letter={key}
                                    count={value}
                                    text={text}
                                    isSpaceOff={isSpaceOff}
                                />
                            );
                        })
                ) : (
                    <h4 className={styles.noText}>
                        No characters found. Start typing to see letter density.
                    </h4>
                )}
            </ul>
            {text && (
                <OpenCloseButton setIsLimit={setIsLimit} isLimit={isLimit} />
            )}
        </div>
    );
}

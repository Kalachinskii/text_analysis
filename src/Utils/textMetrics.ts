export const countValue = (text: string, index: number): number => {
    let countValue = 0;
    // символы
    if (index == 0) {
        countValue = text.length;
        // слова
    } else if (index == 1) {
        countValue = text.split(/\s+/).filter((word) => word.length > 0).length;
        // предложения
    } else {
        countValue = text
            .split(/[.!?]+(?=\s|$)/)
            .filter((sentence) => sentence.trim().length > 0).length;
    }
    return countValue;
};

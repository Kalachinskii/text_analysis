export interface ITextaria {
    name: string;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    placeholderValue?: string;
    limitText?: number | "";
}

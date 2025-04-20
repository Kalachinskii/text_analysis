export interface ICard {
    children: string;
    count: number;
    imageUrl?: string;
    backgroundColor?: string;
}

export type CustomCSS = React.CSSProperties & {
    "--custom-url": string;
    "--background-color"?: string;
};

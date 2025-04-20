export interface ICard {
    children: string;
    count: number;
    imageUrl?: string;
}

export type CustomCSS = React.CSSProperties & {
    "--custom-url": string;
};

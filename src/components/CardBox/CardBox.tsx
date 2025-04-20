import { Card } from "../Card/Card";
import styles from "./CardBox.module.css";
import { cards } from "../../constants/cardsData";
import { ICardBox } from "./ICardBox";

export default function CardBox({ text }: ICardBox) {
    return (
        <div className={styles.cardBox}>
            {cards.map((el, index) => {
                let countValue = 0;
                if (index == 0) {
                    countValue = text.length || 0;
                } else if (index == 1) {
                    countValue = text
                        .split(/\s+/)
                        .filter((word) => word.length > 0).length;
                } else {
                    countValue = text
                        .split(/[.!?]+(?=\s|$)/)
                        .filter(
                            (sentence) => sentence.trim().length > 0
                        ).length;
                }

                return (
                    <Card
                        key={el.title}
                        count={countValue}
                        imageUrl={el.imageUrl}
                        backgroundColor={el.backgroundColor}
                    >
                        {el.title}
                    </Card>
                );
            })}
        </div>
    );
}

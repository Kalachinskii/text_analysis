import { Card } from "../Card/Card";
import styles from "./CardBox.module.css";
import { cards } from "../../constants/cardsData";
import { ICardBox } from "./ICardBox";
import { countValue } from "../../Utils/textMetrics";

export default function CardBox({ text }: ICardBox) {
    return (
        <div className={styles.cardBox}>
            {cards.map((el, index) => {
                return (
                    <Card
                        key={el.title}
                        count={countValue(text, index)}
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

import { Card } from "../Card/Card";
import styles from "./CardBox.module.css";
import { cards } from "../../constants/cardsData";
import { ICardBox } from "./ICardBox";
import { countValue } from "../../Utils/textMetrics";

export default function CardBox({ text, isSpaceOff }: ICardBox) {
    return (
        <div className={styles.cardBox}>
            {cards.map((el, index) => {
                return (
                    <Card
                        key={el.title}
                        count={countValue(
                            text,
                            index,
                            index == 0 && isSpaceOff
                        )}
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

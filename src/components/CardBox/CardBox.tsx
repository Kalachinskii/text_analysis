import { Card } from "../Card/Card";
import styles from "./CardBox.module.css";
import { cards } from "../../constants/cardsData";

export default function CardBox() {
    return (
        <div className={styles.cardBox}>
            {cards.map((el) => (
                <Card
                    key={el.title}
                    count={el.count}
                    imageUrl={el.imageUrl}
                    backgroundColor={el.backgroundColor}
                >
                    {el.title}
                </Card>
            ))}
        </div>
    );
}

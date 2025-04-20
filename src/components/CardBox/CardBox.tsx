import { useState } from "react";
import { Card } from "../../Card/Card";
import styles from "./CardBox.module.css";

export default function CardBox() {
    const cards = [
        {
            title: "Total Characters",
            count: 0,
            imageUrl: "/image/cardElements/1.svg",
        },
        {
            title: "Word count",
            count: 0,
            imageUrl: "/image/cardElements/2.svg",
        },
        {
            title: "Sentence count",
            count: 0,
            imageUrl: "/image/cardElements/3.svg",
        },
    ];

    return (
        <div className={styles.cardBox}>
            {cards.map((el) => (
                <Card key={el.title} count={el.count} imageUrl={el.imageUrl}>
                    {el.title}
                </Card>
            ))}
        </div>
    );
}

import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { Textaria } from "../Textarea/Textaria";
import { Title } from "../Title/Title";
import styles from "./App.module.css";
import BtnBox from "../BtnBox/BtnBox";
import CardBox from "../CardBox/CardBox";
import { AnalysisBox } from "../AnalysisBox/Analysis";

function App() {
    const [text, setText] = useState<string>("");

    return (
        <div className={styles.container}>
            <Logo />
            <Title>Analyze your text in real-time.</Title>
            <Textaria
                name="text"
                text={text}
                setText={setText}
                placeholderValue="Введите текст"
            />
            <BtnBox />
            <CardBox text={text} />
            <AnalysisBox />
        </div>
    );
}

export default App;

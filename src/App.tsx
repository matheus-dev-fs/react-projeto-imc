import { ChangeEvent, Dispatch, JSX, SetStateAction, useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import { calculateImc, levels } from "./helpers/imc.helper";
import { Input } from "./components/input.component";
import { Button } from "./components/button.component";
import { Level } from "./interfaces/level.interface";
import { GridItem } from "./components/grid-item/grid-item.component";

const App = (): JSX.Element => {
    const [height, setHeight]: [
        number, 
        Dispatch<SetStateAction<number>>
    ] = useState<number>(0);
    
    const [weight, setWeight]: [
        number, 
        Dispatch<SetStateAction<number>>
    ] = useState<number>(0);

    const [imc, setImc]: [
        number, 
        Dispatch<SetStateAction<number>>
    ] = useState<number>(0);

    const handleHeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value: number = Number(e.target.value);
        setHeight(value);
    };

    const handleWeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value: number = Number(e.target.value);
        setWeight(value);
    }

    const handleCalculateImc = (): void => {
        if (!height || !weight) {
            alert("Por favor, preencha ambos os campos de altura e peso para calcular o IMC.");
            return;
        }

        const imcValue: number = calculateImc(height, weight)!.yourImc as number;
        setImc(imcValue);
    };

    return (
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img src={poweredImage} alt="Powered by" width={150} />
                </div>
            </header>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h1>Calcule seu IMC.</h1>
                    <p>IMC é a sigla para Índice de Massa Corporal, parâmetro adotado pela OMS (Organização Mundial da Saúde) para calcular o peso ideal de cada pessoa.</p>

                    <Input 
                        text = "Digite sua altura. Ex: 1.5 (em metros)"
                        value={height}
                        changeEvent={handleHeightChange}
                    />

                    <Input 
                        text = "Digite seu peso. Ex: 70 (em kg)"
                        value={weight}
                        changeEvent={handleWeightChange}
                    />

                    <Button onClick={handleCalculateImc} text="Calcular IMC" />
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.grid}>
                        {levels.map((level: Level, index: number): JSX.Element => (
                            <GridItem key={index} level={level} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
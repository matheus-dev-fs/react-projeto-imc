import { JSX } from "react";
import { Level } from "../../interfaces/level.interface";
import styles from "./grid-item.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
    level: Level;
}

export const GridItem = ({ level }: Props): JSX.Element => {
    return (
        <div className={styles.main} style={{ backgroundColor: level.color }}>
            <div className={styles.gridIcon}>
                {level.icon === "up" && <img src={upImage} alt="Up Icon" width={30} />}
                {level.icon === "down" && <img src={downImage} alt="Down Icon" width={30} />}
            </div>
            <div className={styles.gridTitle}>{level.title}</div>

            {level.yourImc && 
                <div className={styles.yourImc}>Seu IMC: {level.yourImc}</div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{level.imc[0]}</strong> e <strong>{level.imc[1]}</strong>
                </>
            </div>
        </div>
    );
};
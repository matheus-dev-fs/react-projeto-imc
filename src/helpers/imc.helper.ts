import { Level } from "../interfaces/level.interface";

export const levels: Level[] = [
    { title: "Magreza", color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    { title: "Normal", color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
    { title: "Sobrepeso", color: '#E2B039', icon: 'down', imc: [25, 30] },
    { title: "Obesidade", color: '#C3423F', icon: 'down', imc: [30.1, 99] },
];

export const calculateImc = (height: number, weight: number): Level | null => {
    const imcValue: number = weight / (height * height);
    
    for (const level of levels) {
        const min: number = level.imc[0];
        const max: number = level.imc[1];

        if (imcValue < min || imcValue > max) 
            continue;

        level.yourImc = imcValue;
        return level;
    }

    return null;
}
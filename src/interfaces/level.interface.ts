export interface Level {
    title: string;
    color: string;
    icon: 'up' | 'down';
    imc: [number, number];
    yourImc?: number;
}
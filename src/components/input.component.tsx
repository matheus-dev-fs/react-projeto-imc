import { JSX } from "react";

type Props = {
    text: string;
    value: number
    changeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({text, value, changeEvent}: Props): JSX.Element => {
    return (
        <input
            type="number"
            placeholder={text}
            value={value > 0 ? value : ""}
            onChange={changeEvent}
        />
    );
}
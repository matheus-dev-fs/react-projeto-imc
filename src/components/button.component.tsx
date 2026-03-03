import { JSX } from "react";

type Props = {
    text: string;
    onClick: () => void;
    disable?: boolean;
}

export const Button = ({ onClick, text, disable }: Props): JSX.Element => {
    return (
        <button onClick={onClick} disabled={disable}>{text}</button>
    );
}
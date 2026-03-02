import { JSX } from "react";

type Props = {
    text: string;
    onClick: () => void;
}

export const Button = ({ onClick, text }: Props): JSX.Element => {
    return (
        <button onClick={onClick}>{text}</button>
    );
}
import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

interface diceProps {
    dhValue: number;
    setDhValue: React.Dispatch<React.SetStateAction<number>>;

}

function Doubler(props: diceProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                props.setDhValue(2 * props.dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver(props: diceProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                props.setDhValue(0.5 * props.dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue = {dhValue} setDhValue = {setDhValue}/>
            <Halver dhValue = {dhValue} setDhValue = {setDhValue}/>
        </div>
    );
}

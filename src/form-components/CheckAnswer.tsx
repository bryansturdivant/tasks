import React, { useEffect, useState } from "react";

//const defaultAnswer: string = "";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    function updateUserAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }
    // function updateIsCorrect(event: React.FormEvent<HTMLFormElement>) {
    //     event.preventDefault();
    //     setIsCorrect(userAnswer === expectedAnswer);
    // }


    useEffect(()=> {
        setIsCorrect(userAnswer === expectedAnswer);
    }, [userAnswer, expectedAnswer]);
    return (
        <div>
            <h3>Check Answer</h3>
            <form onSubmit = {(e) => {e.preventDefault();}}>
                <input
                    type="text"
                    value={userAnswer}
                    onChange={updateUserAnswer}
                    placeholder="Enter your Answer"
                />
                <button type="submit">Submit</button>
            </form>

            <div>
                {isCorrect ?
                    <span role="img" aria-label="checkmark">
                        ✔️
                    </span>
                :   <span role="img" aria-label="cross">
                        ❌
                    </span>
                }
            </div>
        </div>
    );
}

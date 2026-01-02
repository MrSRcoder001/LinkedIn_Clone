import { useState } from "react"

export default function Lodo() {
    let [set, setcount] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });
    // ,green:set+1,red:set+1,yellow:set+1
    let updateMoves = () => {
        setcount((preval) => {
            return { ...preval, blue: set.blue + 1 };
        });
    };
    let updateRed = () => {
        setcount((preval) => {
            return { ...preval, red: set.red + 1 };
        });
    };

    let updateGreen = () => {
        setcount((preval) => {
            return { ...preval, green: set.green + 1 };
        });
    };

    let updateYellow = () => {
        setcount((preval) => {
            return { ...preval, yellow: set.yellow + 1 };
        });
    };

    return (
        <div>
            <h2>LoDo Game</h2>
            <p>Moves {set.blue}</p>
            <button style={{ backgroundColor: 'blue' }} onClick={updateMoves}>Blue</button>
            <p> Moves {set.yellow}</p>
            <button style={{ backgroundColor: 'Yellow', color: 'black' }} onClick={updateYellow}>Yellow</button>
            <p> Moves {set.red}</p>
            <button style={{ backgroundColor: 'Red' }} onClick={updateRed}>Red</button>
            <p> Moves {set.green}</p>
            <button style={{ backgroundColor: 'Green' }} onClick={updateGreen}>Green</button>
        </div>
    )
}
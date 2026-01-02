import { useState } from 'react';
// import './Ticket.css';
import TicketNum from './TicketNum';
import { Lottorygenerator, sum } from './Lottorygenerator';
export default function Lottory({ n, win }) {
    let [ticket, setTicket] = useState(Lottorygenerator(n));
    let isWin = sum(ticket) === win;
    const callTicket = () => {
        setTicket(Lottorygenerator(n)); 
    }
    return (
        <div>
            <TicketNum ticket={ticket}/>
            <br />  <br />
            <button onClick={callTicket} >Lottery Generator</button>
            <p>{isWin && "Congratulation bro uuu win"}</p>

        </div>
    )
}
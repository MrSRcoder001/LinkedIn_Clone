import TicketNumber from "./TicketNumber"
export default function TicketNum({ ticket }) {
    return (
        <div style={{color:"white", width:"50px"} }>
            {
                ticket.map((nums, id) => (
                    <TicketNumber nums={nums} key={id}/>
                ))
            } 
        </div>
    )
}
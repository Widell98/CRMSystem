import { Link } from 'react-router-dom'
import AvatarDisplay from "./AvatarDisplay"
import StatusDisplay from "./StatusDisplay"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import DeleteBlock from "./DeleteBlock"


const TicketCard = ({ color, ticket }) => {
    return (
        <div className="ticket-card">
            
            <Link to={`/clients/${ticket.documentId}`}id="link">
            <div className="ticket-color" style={{backgroundColor: color}}></div>
                <h3 className="ticket-location">{ticket.title}</h3>
                <AvatarDisplay ticket={ticket}/>
                <h3 className="ticket-location">{ticket.location}</h3>
                <h3 className="ticket-Telephone">{ticket.Telephone}</h3>
                <StatusDisplay status={ticket.status}/>             
                {/* <PriorityDisplay priority={ticket.priority} /> */}
                <ProgressDisplay progress={ticket.progress} />
            </Link>
            
         <DeleteBlock documentId={ticket.documentId}/>
        </div>
    )
}

export default TicketCard
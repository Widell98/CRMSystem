import { Link } from 'react-router-dom'
import AvatarDisplay from "./AvatarDisplay"
import DeleteBlock from "./DeleteBlock"

const EmployeeCard = ({ color, ticket }) => {
    return (
        <div className="ticket-card">
            
            <Link to={`/adminpage/${ticket.documentId}`}id="link">
            <div className="ticket-color" style={{backgroundColor: color}}></div>
                <h3>{ticket.Name}</h3>
                <h3>{ticket.Role}</h3>
                <h3>{ticket.Telephone}</h3>
                <h3>{ticket.Email}</h3>
                <AvatarDisplay ticket={ticket}/>
            </Link>
            <DeleteBlock documentId={ticket.documentId}/>
        </div>
    )
}

export default EmployeeCard
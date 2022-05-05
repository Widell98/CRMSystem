import { Link } from 'react-router-dom'
import AvatarDisplay from "./AvatarDisplay"


const EmployeeCard = ({ color, ticket }) => {
    return (
        <div className="ticket-card">
            
            <Link to={`/Employees/${ticket.documentId}`}id="link">
            <div className="ticket-color" style={{backgroundColor: color}}></div>
                <h3>{ticket.name}</h3>
                <h3>{ticket.role}</h3>
                <h3>{ticket.email}</h3>
                <h3>{ticket.phonenumber}</h3>
                <AvatarDisplay ticket={ticket}/>

            </Link>
        </div>
    )
}

export default EmployeeCard
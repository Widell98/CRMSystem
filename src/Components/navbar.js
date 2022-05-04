import logo from '../images/crm-logo.png'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()

    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo" />

            </div>
            <div className="controls-container">
                <div className="icon" onClick={() => navigate('/clients')}>+</div>
                <div className="icon" onClick={() => navigate('/')}>↞</div>
                <div className="icon" onClick={() => navigate('/EmployeePage')}>E</div>
                <div className="icon" onClick={() => navigate('/LoginPage')}>D</div>
                <div className="icon" onClick={() => navigate('/CalenderPage')}>C</div>
                

            </div>
        </nav>
    )
}

export default Nav


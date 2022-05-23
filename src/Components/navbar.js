import logo from '../images/ap_logo.png'
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
                <div className="icon" onClick={() => navigate('/dashboard')}>-</div>    
             
                <div className="icon" onClick={() => navigate('/employees')}>E</div>
                <div className="icon" onClick={() => navigate('/LoginPage')}>D</div>
                {/* <div className="icon" onClick={() => navigate('/CalenderPage')}>C</div> */}
            </div>
        </nav>
    )
}

export default Nav


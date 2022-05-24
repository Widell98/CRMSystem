import logo from '../images/ap_logo.png'
import { useNavigate } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs";
import { BsMegaphoneFill } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";


const Nav = () => {
    const navigate = useNavigate()
    
    return (

        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo" />

            </div>
            <div className="controls-container">
                <div className="BsFillHouseDoorFill" onClick={() => navigate('/dashboard')}><BsFillHouseDoorFill/></div>
                <div className="BsMegaphoneFill" onClick={() => navigate('/clients')}><BsMegaphoneFill/></div>
                <div className="BsFillPersonFill" onClick={() => navigate('/employees')}><BsFillPersonFill/></div>
                <div className="icon" onClick={() => navigate('/LoginPage')}></div>
                {/* <div className="icon" onClick={() => navigate('/CalenderPage')}>C</div> */}
            </div>
        </nav>
    )
}

export default Nav
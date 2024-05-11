import { Link } from 'react-router-dom'
import imgProfile from "../../../assets/images/profile_pictures/default.png";

export default function Navigation() {
  return (
    <div className="navigation flex-between" id="nav">
        <div className="close-nav" id="closeNav"></div>
        <nav>
            <Link className="text-decoration-none text-white" to="/">
                <div className="nav flex-left active-nav text-danger">
                    <div className="nav-icon flex-center">
                        <i className="bi bi-bi bi-grid-1x2 fs-5"></i>
                    </div>
                    <h1 className="mb-0">Dashboard</h1>
                </div>
            </Link>
            
            <Link className="text-decoration-none text-white" to="/devices">
                <div className="nav flex-left ">
                    <div className="nav-icon flex-center">
                        <i className="bi bi bi-hdd-rack-fill"></i>
                    </div>
                    <h1 className="mb-0">Devices</h1>
                </div>
            </Link>

            <Link className="text-decoration-none text-white" to="/device-parameters">
                <div className="nav flex-left ">
                    <div className="nav-icon flex-center">
                        <i className="bi bi-hdd-fill fs-5"></i>
                    </div>
                    <h1 className="mb-0">Paramters</h1>
                </div>
            </Link>

            <Link className="text-decoration-none text-white" to="/sensor-data">
                <div className="nav flex-left ">
                    <div className="nav-icon flex-center">
                        <i className="bi bi bi-cpu-fill fs-5"></i>
                    </div>
                    <h1 className="mb-0">Sensor Data</h1>
                </div>
            </Link>
        </nav>

        <div className="profile flex-left">
            <div className="profile-picture flex-center">
                <img src={imgProfile} />
            </div>
            <div className="user-details">
                <h1 className="mt-3">Demo User</h1>
                <p>Super Admin User</p>
            </div>
        </div>
        
    </div>
  )
}

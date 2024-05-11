import imgProfile from "../../../assets/images/profile_pictures/default.png";
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="brand flex-left">
        <Link to="/">
            <div className="logo flex-center">
                <i className="bi bi-motherboard-fill text-white display-6"></i>
            </div>
        </Link>

        <h1 className="mb-0">Time-Series <small className="px-2 py-1 rounded bg-beta text-dark">BETA</small></h1>

        <div className="user-menu flex-between">
            <div className="user-profile">
                <img src={imgProfile} />
            </div>

            <div className="mobile-menu flex-center">
                <i className="bi bi-list text-dark"></i>
            </div>
        </div>
    </div>
  )
}

import beeLogo from './beelogo.png';
import './custom.css';
import { FaUserCircle, FaChevronDown } from 'react-icons/fa';

function Header() {
    return (
        <div className="d-flex p-3 justify-content-between header">
            <div >
                <img className="imgLogo" src={beeLogo} />
                <h5 className="nameHeader d-inline">みつばち</h5>
            </div>
            <div >
                <FaUserCircle size={32} className="orangeColor mr-2" />
                <span className="mr-2 align-center userNameHeader">そら たいし</span>
                <FaChevronDown className="align-center" style={{ width: "18px", height: "9px" }} />
            </div>
        </div>
    )
}

export default Header;
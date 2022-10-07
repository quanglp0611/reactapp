import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarContent,
} from "react-pro-sidebar";
import "./sideBar.css"
import { Link } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import { AiFillHome, AiOutlineDollar } from 'react-icons/ai';
import { BsSun } from 'react-icons/bs';
import { VscBell } from 'react-icons/vsc';
import { useState } from "react";

function SideBar() {
    let [pathname, setPathname] = useState('/');
    const updateUrl = () => {
        setTimeout(() => {
            setPathname(window.location.pathname);
        }, 0);
    }

    const MenuLink = ({ title, to, icon, active }) =>
        <Link to={to} >
            <MenuItem active={active} icon={icon} onClick={() => { updateUrl() }} className={(to === pathname) ? "tabActive" : ""}>
                {title}
            </MenuItem>
        </Link>;

    return (
        <div id="sideBar">
            <ProSidebar >
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuLink title="TOP" to="/" icon={<AiFillHome />} active={true} />
                        <MenuLink title="使用量・請求額" to="/bill" icon={<AiOutlineDollar />} />
                        <MenuLink title="省エネ" to="/energy-saving" icon={<BsSun />} />
                        <MenuLink title="通知" to="/notification" icon={<VscBell />} />
                        <MenuLink title="マイページ" to="/my-page" icon={<FaUserAlt />} />
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div >
    )
}

export default SideBar;
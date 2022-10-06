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

function SideBar() {
    return (
        <div id="sideBar">
            <ProSidebar >
                <SidebarContent>
                    <Menu iconShape="square">
                        <Link to="/" >
                            <MenuItem active={true} icon={<AiFillHome />} >
                                TOP
                            </MenuItem>
                        </Link>
                        <Link to="/bill" >
                            <MenuItem icon={<AiOutlineDollar />} >
                                使用量・請求額
                            </MenuItem>
                        </Link>
                        <Link to="/energy-saving" >
                            <MenuItem icon={<BsSun />}>省エネ</MenuItem>
                        </Link>
                        <Link to="/notification" >
                            <MenuItem icon={<VscBell />}>通知</MenuItem>
                        </Link>
                        <Link to="/my-page" >
                            <MenuItem icon={<FaUserAlt />}>マイページ</MenuItem>
                        </Link>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    )
}

export default SideBar;
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { FaHouseUser, FaUserAlt } from 'react-icons/fa';
import { AiFillHome, AiOutlineDollar } from 'react-icons/ai';
import { BsSun } from 'react-icons/bs';
import { VscBell } from 'react-icons/vsc';

function SideNavBar() {
    return (
        <div id="sideBar">
            <ProSidebar >
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem active={true} icon={<AiFillHome />} >
                            TOP
                            <Link to="/top" />
                        </MenuItem>
                        <MenuItem icon={<AiOutlineDollar />} >
                            使用量・請求額
                            <Link to="/bill" />
                        </MenuItem>
                        <MenuItem icon={<BsSun />}>省エネ</MenuItem>
                        <MenuItem icon={<VscBell />}>通知</MenuItem>
                        <MenuItem icon={<FaUserAlt />}>マイページ</MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    )
}

export default SideNavBar
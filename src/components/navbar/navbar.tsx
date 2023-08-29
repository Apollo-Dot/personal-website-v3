import { GoHomeFill } from 'react-icons/go';
import { FaCamera } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';
import { BiSolidGame } from 'react-icons/bi';


export function NavBar() {

    return (
        <div className="fixed z-10 top-0 left-0 h-screen w-16 flex flex-col
                bg-white dark:bg-gray-900 shadow-lg">

            <SideBarIcon icon={<GoHomeFill size="28" />} text='🏠 Home' />
            <Divider />
            <SideBarIcon icon={<BiSolidGame size="28" />} text='🕹️ My Games (WIP)' />
            <Divider />
            <SideBarIcon icon={<FaCamera size="28" />} text='📷 Photography (WIP)' url='/photography'/>
            <SideBarIcon icon={<SiAdobephotoshop size="25" />} text='📷 Photoshop (WIP)' />
        </div>
    )
}

// @ts-ignore
const SideBarIcon = ({ icon, text = 'tooltip 💡', url = '/' }) => (
    <a href={url}>
        <div className="sidebar-icon group">
            {icon}
            <span class="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    </a>

);


const Divider = () => <hr className="sidebar-hr" />;
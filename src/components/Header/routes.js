// import Home from '../../assets/header/home.png';
// import Support from '../../assets/header/support.png';
// import feed from '../../assets/header/feed.png';
// import sessions from '../../assets/header/sessions.png';
// import calendar from '../../assets/header/calendar.png';
// import notification from '../../assets/header/notification.png';
import { FiHome } from "react-icons/fi";
import { MdOutlineFeed } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";
import { LuCalendarDays } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineSupport } from "react-icons/hi";


const navLinks= [
    {
        title:'Home',
        icon:<FiHome /> ,
        // icon:Home ,
        link:'/dashboard',
    },
    {
        title:'Support',
        icon:<HiOutlineSupport />,
        // icon:Support ,
        link:'/support',
    },
    {
        title:'Feed',
        icon:<MdOutlineFeed />,
        // icon:feed ,
        link:'/feed',
    },
    {
        title:'Sessions',
        icon:<SlGraduation /> ,
        // icon:sessions ,
        link:'/session',
    },
    {
        title:'Calendar',
        icon:<LuCalendarDays /> ,
        // icon:calendar ,
        link:'/calendar',
    },
    {
        title:'Notification',
        icon:<IoIosNotificationsOutline />,
        // icon:notification ,
        link:'/notification',
    },
    
]
export default navLinks;
import c from './Sidebar.module.css';
import { FiX } from 'react-icons/fi';
import { IoMdContact } from 'react-icons/io';
import sidebarData from '../../Sidebar.json';
import { MdArrowForwardIos } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <div className={isSidebarOpen === true ? `${c.sidebar} ${c.active}` : `${c.sidebar}`}>
            <div className={c.sidebar__content__group}>
                <div className={c.sidebar__header}>
                    <i><IoMdContact className={c.sidebar__header__icons} /></i>
                    <h2 className={c.sidebar__title}>Hello, sign in</h2>
                    <div>
                        <FiX className={c.close} onClick={() => { setIsSidebarOpen(false) }} />
                    </div>
                </div>
                <div className={c.box}></div>
                <div className={c.sidebar__text__info}>
                    <div className={c.sidebar__befor}>
                        {
                            sidebarData.map(data =>
                                <div>
                                    <h3 className={c.sidebarData__title}>{data.title}</h3>
                                    {
                                        data.sidebarMainGroup.map(mainTitle =>
                                            <Link className={c.links} to="/registr">
                                                <div className={c.sidebarData__mainTitle}>
                                                    <p>{mainTitle.mainTitle}</p>
                                                    <MdArrowForwardIos className={c.mainTitle__icons} />
                                                </div>
                                            </Link>
                                        )
                                    }
                                </div>
                            )
                        }
                        <div className={c.sidebar__footerContent}>
                            <h3 className={c.sidebarData__title}>Help & Settings</h3>
                            <p className={c.sidebarData__mainTitle}>Your Account</p>
                            <div className={c.sidebar__footer__content}>
                                <AiOutlineGlobal className={c.global__icons} />
                                <p className={c.sidebarData__footer__text}>English</p>
                            </div>
                            <div className={c.sidebar__footer__content}>
                                <img className={c.usa__flag} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cL3I-Lg0JPr84eG2Ipms_tEAhB4sHbAMXQ&usqp=CAU"} alt="united-states-flag" />
                                <p className={c.sidebarData__footer__text}>United States</p>
                            </div>
                            <Link className={c.sidebarData__mainTitle} to="/servic"><p>Customer Service</p></Link>
                            <p className={c.sidebarData__mainTitle}>Sign in</p>
                        </div>
                    </div>
                    <div className={c.sidebar__after}>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Sidebar;
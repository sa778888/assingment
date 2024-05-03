import {useEffect, useRef, useContext} from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import userImg from "../../assets/images/avatar-icon.png";
import {BiMenu} from "react-icons/bi";
import { authContext } from '../../context/AuthContext';
const navlinks = [
    {
        path:"./home",
        display:"Home"
    },
    {
        path:"./doctors",
        display:"Find a Doctor"
    },
    {
        path:"./services",
        display:"Services"
    },
    {
        path:"./contacts",
        display:"Contact Us"
    },
]
const Header = () =>{

    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const {user,role,token} = useContext(authContext);

    const handle_Sticky_Header = () =>
    {
        window.addEventListener('scroll', ()=>
        {
            if(document.body.scrollTop> 80 || document.documentElement.scrollTop > 80)
            {
                headerRef.current.classList.add("sticky_header");
            }else{
                headerRef.current.classList.remove("sticky_header");
            }
        })
    }
    useEffect(() =>{
        handle_Sticky_Header();
        return ()=> document.removeEventListener('scroll', handle_Sticky_Header);
    })

    const toggle_Menu = ()=> menuRef.current.classList.toggle('show_menu');

    return <header className="header flex items-center" ref={headerRef}>
        <div className="container">
            <div className="flex items-center justify-between">
                <div>
                    <img className='flex item-center' src={Logo} alt="Logo"/>
                </div>  


                <div className='navigation' ref={menuRef} onClick={toggle_Menu}>
                    <ul className='menu flex items-center gap-[2.7rem]'>
                        {
                            navlinks.map((link, index) => <li key={index}>
                                <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]': 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>{link.display}</NavLink>
                            </li>
                            )
                        }
                    </ul>
                </div>

                <div className='flex items-center gap-4 flex-row'>

                    {user && token ? <div>
                        <Link to={`${role === 'doctor' ? '/doctors/profile/me': '/users/profile/me' }`} className='flex items-center gap-4'>
                            
                            <figure className="w-[35px] h-[35px] rounded-full">
                                <img src={userImg} className="w-full rounded-full" alt="" />
                            </figure>
                            <h2>Welcome, {user.split(' ')[0]} !!</h2>
                        </Link>
                    </div> : <Link to="/login">
                        <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                        Login
                        </button>
                    </Link>
                    }
                    

                    
                    <span className='md:hidden' onClick={toggle_Menu}>
                        <BiMenu className='w-6 h-6 cursor-pointer'/>
                    </span>
                    
                </div>
            </div>
        </div>
    </header>
}
export default Header;
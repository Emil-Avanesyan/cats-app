import React from 'react';
import LogoSrc from "../../../assets/images/cat-logo.png";
import {Link} from "react-router-dom";

const HeaderLogo = () => {
    return (
        <Link to='/'>
            <div className='main_logo' onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                <img src={LogoSrc} alt='Logo' width='64px' height='64px'/>
            </div>
        </Link>

    );
};

export default HeaderLogo;
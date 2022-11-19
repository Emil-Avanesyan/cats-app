import React from 'react';
import './style.scss';
import HeaderLogo from "./HeaderLogo";

const Header = () => {
    return (
        <header className='padding_main'>
            <HeaderLogo/>
        </header>
    );
};

export default Header;
import React from 'react';
import './secondaryMenu.css'


export const SecondaryMenu = () => {
    return (
        <ul className='navList secondary_menu'>
            <li>
                <a href="#" className='navLink'>Privacy Policy</a>
            </li>
            <li>
                <a href="#" className='navLink'>Report a Bug</a>
            </li>
            <li>
                <a href="#" className='navLink'>Support</a>
            </li>
        </ul>
    )
}
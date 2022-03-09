///////////////////////////////////////////////////
//  src/components/Navbar.js
///////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import { debounce } from './Debounce';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    // **** Styling for Navbar ********
    const navbarStyles = {
        position: 'fixed',
        height: '60px',
        width: '100%',
        backgroundColor: 'grey',
        textAlign: 'center',
        transition: 'top 0.6s'
    }

    // **** Handle Scroll Methode ********
    const handleScroll = debounce(() => {
        // find current scroll position
        const currentScrollPos = window.pageYOffset;

        // set state based on location info
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
    }, 100);

    // **** Use Effect *********
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    return (
        <div style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>
            Some Company Inc.
        </div>
    );
};

export default Navbar;
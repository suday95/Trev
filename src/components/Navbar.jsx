"use client";

import styles from './Navbar.module.css';
import { Atkinson_Hyperlegible } from 'next/font/google';
import Image from 'next/image';
import useWindowSize from '../app/hooks/useWindowSize';
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import FancyButton from './FancyButton';
import BubbleButton from './BubbleButton';
import Link from 'next/link';
import Sidebar from './Sidebar';
const atkinson = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
});

function ShowOnMobile({ children }) {
  const width = useWindowSize();
  return width <= 768 ? children : null;
}

function ShowOnDesktop({ children }) {
  const width = useWindowSize();
  return width > 768 ? children : null;
}


export default function Navbar() {
  const windowSize = useWindowSize();
  const isMobile = windowSize <= 768; // Adjust breakpoint as needed
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <div className={`${styles.navWrapper} ${atkinson.className}`}>
      <nav className={styles.navbar}>
        <div className={styles.leftNav}>
  <ShowOnDesktop>
  <span className={styles.waveLink}>
    <Link href="/">Men</Link>
  </span>
  <span className={styles.waveLink}>
    <Link href="/women">Women</Link>
  </span>
</ShowOnDesktop>

          <ShowOnMobile>
            <div className={styles.hamburger}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
<div className={`${styles.sidebar} ${isOpen ? styles.show : ''}`}>
        <div className={styles.sidebarContent}>
          <Sidebar/>
        </div>
      </div>
      )}
      
          </ShowOnMobile>
 

</div>   
        <div className={styles.centerNav}>
          <div className={styles.arc}></div>
          <div className={styles.logoText}>TREV</div>
        </div>

        <div className={styles.rightNav}>
<ShowOnDesktop>
  <span className={`${styles.waveLink} ${styles.cart}`}>
    <Link href="/cart">Cart</Link>
  </span>
</ShowOnDesktop>

          <BubbleButton>
            <span className='loginbtn' >Login</span>
          </BubbleButton>
        </div>
      </nav>
    </div>
  );
}

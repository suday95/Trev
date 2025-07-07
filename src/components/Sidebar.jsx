'use client';
import SidebarItem from './SidebarItem';
import styles from '@/styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <>
    <ul className={styles.sidebar}>
      <SidebarItem iconLetter="M" label="Men" colors={['#a955ff', '#ea51ff']} />
      <SidebarItem iconLetter="W" label="Women" colors={['#56CCF2', '#2F80ED']} />
      <SidebarItem iconLetter="C" label="Cart" colors={['#FF9966', '#FF5E62']} />
      <SidebarItem iconLetter="L" label="Login" colors={['#80FF72', '#7EE8FA']} />
    </ul>
    </>
  );
}

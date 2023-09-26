import React, { useState } from 'react'
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import {HiMenuAlt3} from 'react-icons/hi';
import {ImCross} from 'react-icons/im';

const logo = (
    <div className={styles.logo}>
        <Link to='/'>
            <h2>Shop<span>psy</span></h2>
            </Link>
    </div>
);
const activeLink = ({isActive}) => (isActive?`${styles.active}`:'');

const Header = () => {
    const [showMenu,setShowMenu] = useState(false);
    const [scrollPage,setScrollPage] = useState(false);

    const fixNavbar = ()=>{
        if(window.scrollY){
            setScrollPage(true)
        }
        else{
            setScrollPage(false);
        }
    }
    window.addEventListener('scroll',fixNavbar);

    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
    }
    const hideMenu = ()=>{
        setShowMenu(false);
    }

    const cart = (
        <span className={styles.cart}>
            <NavLink to='/cart' className={styles.cart}>
                Cart
            <FaShoppingCart size={20}/>
            <p>0</p>
            </NavLink>
        </span>
    )

  return (
    <header className={scrollPage?`${styles.fixed}`:null}>
      <div className={styles.header}>{logo} 
      <nav className={showMenu?`${styles['show-nav']}`:`${styles['hide-menu']}`}>
            <div className={showMenu ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`:`${styles['nav-wrapper']}`} onClick={hideMenu}>

            </div>
        <ul>
            <li className={styles['logo-mobile']}>
                {logo}
                <ImCross size={22} color='#fff' onClick={hideMenu}/>
            </li>
            <li>
                <NavLink to="/shop" className={activeLink}>Shop</NavLink>
            </li>
        </ul>
        <div className={styles['header-right']}>
            <span className={styles.links}>
                <NavLink className={activeLink} to={'login'}>Login</NavLink>
                <NavLink className={activeLink} to={'register'}>Register</NavLink>
                <NavLink className={activeLink} to={'order-history'}>My orders</NavLink>             
            </span>
            {cart}
        </div>
        </nav> 
        <div className={styles['menu-icon']}>
            {cart}
            <HiMenuAlt3 size={28} onClick={toggleMenu}/>
        </div>
      </div>
    </header>
  )
}

export default Header

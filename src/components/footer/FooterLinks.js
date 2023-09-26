import React from 'react';
import './FooterLinks.scss'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logoImg from '../../assets/shopito_logo.png'
const FooterLinks = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container contact">
            <FaFacebookF className='i'/>
            <FaInstagram className='i'/>
            <FaTwitter className='i'/>
            <FaYoutube className='i'/>
            <h2>Let's have Chat</h2>
            <a href="#home" className='btn btn-dark'>Make an Inquiry</a>
        </div>
      </section>
      <section className="footer-section">
        <div className="container footer">
            <div className="footer-logo">
                <img src={logoImg} alt="" />
            </div>
            <div className="footer-menu">
                <p className="link-heading">
                    Features
                </p>
                <ul className='nav-ul footer-links'>
                    <li><a href="#home">Link Shortening</a></li>
                    <li><a href="#home">Analytics</a></li>
                    <li><a href="#home">Blogs</a></li>
                    <li><a href="#home">Branded Links</a></li>
                </ul>
            </div>
            <div className="footer-menu">
                <p className="link-heading">
                    Resources
                </p>
                <ul className='nav-ul footer-links'>
                    <li><a href="#home">Link Shortening</a></li>
                    <li><a href="#home">Analytics</a></li>
                    <li><a href="#home">Blogs</a></li>
                    <li><a href="#home">Branded Links</a></li>
                </ul>
            </div>
            <div className="footer-menu">
                <p className="link-heading">
                    Company
                </p>
                <ul className='nav-ul footer-links'>
                    <li><a href="#home">Link Shortening</a></li>
                    <li><a href="#home">Analytics</a></li>
                    <li><a href="#home">Blogs</a></li>
                    <li><a href="#home">Branded Links</a></li>
                </ul>
            </div>
            <div className="footer-menu">
                <p className="link-heading">
                    Partners
                </p>
                <ul className='nav-ul footer-links'>
                    <li><a href="#home">Link Shortening</a></li>
                    <li><a href="#home">Analytics</a></li>
                    <li><a href="#home">Blogs</a></li>
                    <li><a href="#home">Branded Links</a></li>
                </ul>
            </div>
           
        </div>
      </section>
    </>
  )
}

export default FooterLinks

import React from 'react';
import './Footer.css';
import linkedin_logo from '..//logo/logo-linkedin.svg'
import instagram_logo from '..//logo/Instagram-Logo.wine.svg'
import whatsapp_logo from '..//logo/WhatsApp.svg'

const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer-itemsCntnr">
          <div className="footer-Item">
            <ul className="footer_listContainer">
              <li className="item">About</li>
              <li className="item">Careers</li>
              <li className="item">Contact Us</li>
            </ul>
          </div>
          <div className="footer-Item">
            <ul className="footer_listContainer">
              <li className="item">Account</li>
            </ul>
          </div>
          <div className="footer-Item">
            <ul className="footer_listContainer">
              <li className="item">Orders</li>
            </ul>
          </div>
          <div className="footer-Item">
            <div className="kp-IntouchCntnr">
              <span className='side-of-kpIntouch'></span>
              <span className="kp-Intouch">Keep In touch</span>
              <span className='side-of-kpIntouch'></span>
            </div>
            <div className="profileContainer">
              <a href="https://www.linkedin.com/in/savindr-kumar/" className="profile-icon" target="blank" ><img src={linkedin_logo} alt="linkedin" className="linkedIn" /></a>

              <a href="https://www.instagram.com/savindr037/" className="profile-icon" target="blank" ><img src={instagram_logo} alt="instagram" className="instagram" /></a>

              <a href="https://wa.me/7071406586" className="profile-icon" target="blank" ><img src={whatsapp_logo} alt="whatsapp" className="whatsapp" /></a>
            </div>
          </div>
        </section>

        <section className="copy-rightCntnr">
          <span className='copy-right'>&copy; 2022, Shoppingwithme.com</span>
        </section>
      </footer>
    </>
  )
}

export default Footer;
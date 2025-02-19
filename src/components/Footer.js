import React from "react";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer} style={{display:"flex",justifyContent:'space-between'}}>
        <div className={styles.socialSection}>
          <h2>Connect on <br></br> social</h2>
          <div className={styles.socialIcons} style={{display:"flex",gap:"20px",marginTop:"20px"}}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className={styles.linksSection}>
          <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="/privacy-policy">Privacy policy</a></li>
            <li><a href="/terms-condition">Terms & conditions</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
          </ul>
        </div>

        <div className={styles.addressSection}>
          <p style={{textAlign:"left"}}><strong>Registered Office</strong></p>
          <p style={{textAlign:"left"}}>Sector 62 A Tower,</p>
          <p style={{textAlign:"left"}}>Noida, Uttar Pardesh, 201309</p>
          <p style={{textAlign:"left"}}>Call: 9875567897</p>
          <p style={{textAlign:"left"}}>
            Email:{" "}
            <a href="mailto:travel@trippersway.com">
              trip@ghumoTrip.com
            </a>
          </p>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <h1 style={{fontSize:"20px"}}>GHUMO TRIP</h1>
        {/* <img
          src="https://via.placeholder.com/100x50"
          alt="Trippers Logo"
          className={styles.footerLogo}
        /> */}
        <p>© 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

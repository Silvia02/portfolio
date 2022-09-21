import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa';
import {FooterSection, DivSocial, DivCopy } from '../../Styles.js'


const Footer = () => {
  
return (
  <>
    <FooterSection id="section">
      <DivSocial className="divSocial">
        <a href="https://www.instagram.com/silvinhaunik/">
          <FaInstagram size="25px" />
        </a>

        <a href="https://github.com/Silvia02">
          <FaGithub size="25px" />
        </a>

        <a href="https://www.linkedin.com/in/silvia-morais-b99106159/">
          <FaLinkedin size="25px" />
        </a>
      </DivSocial>
      <DivCopy className="divContact">
        <span>Email: srj1213@gmail.com</span>
        <span>Tel: (+46) 0735-291649</span>
        <span> Copyright &copy; 2022 Silvia Morais</span>
      </DivCopy>
    </FooterSection>
  </>
);

}


export default Footer;
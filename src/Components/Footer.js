import React from 'react'
import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <FacebookIcon/>
        {/* Instagram ikonuna link ekleyelim */}
        <a href="https://www.instagram.com/anldmrlpp_/">
          <InstagramIcon/>
        </a>
        <XIcon/>
      </div>
      <p> © Tüm Hakları Saklıdır | Burger Yiyelim</p>
    </div>
  )
}

export default Footer

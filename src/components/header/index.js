import './header.css';

import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header'>
        <div className='header-logo'>
                  Xpensor <i class="fi fi-rr-credit-card"></i>
        </div>
        <div className='header-button'>
            <a
                href='http://github.com'
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="devicon-github-original"></i> Star
            </a>
        </div>
      </div>
    </div>
  )
}

export default Header

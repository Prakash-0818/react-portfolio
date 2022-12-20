import React from 'react'
import {SiLinkedin} from 'react-icons/si';
import {ImGithub} from 'react-icons/im';
import {SiLeetcode} from 'react-icons/si';
const HeaderSocial = () => {
  return (
   <div className="header__social">
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><SiLinkedin/></a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><ImGithub/></a>
    <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer"><SiLeetcode/></a>
   </div>
  )
}

export default HeaderSocial
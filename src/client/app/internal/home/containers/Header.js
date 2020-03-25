import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import dp from '../../../../shared/assets/images/dp.png'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="line-through hide">
          <hr />
        </div>
        <div className="image hide">
          <img src={dp} />
        </div>
        <div className="name hide">
          Chris Rabang
        </div>
        <div className="job-title hide">
          Web Developer
        </div>
        <div className="links hide">
          <ul>
            <li><a title="GitHub" href="https://github.com/chrsrbng" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
            <li><a title="LinkedIn" href="https://www.linkedin.com/in/chrisbryanrabang" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></li>
            <li><a title="Resume" href="/documents/Chris-Rabang-Resume.pdf" target="_blank"><FontAwesomeIcon icon={faFilePdf}/></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
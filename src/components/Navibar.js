/* eslint-disable */

import { useMediaQuery } from 'react-responsive';
import { FaCommentAlt, FaUserGraduate, FaCode, FaPaintBrush, FaRunning, FaEnvelope } from 'react-icons/fa';
import { Link, Route } from 'react-router-dom';

function Navibar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


  return (
    <div>
      {isDesktopOrLaptop && (
        <div>
          <div className="Navigate">
            <div className="Logo"><Link to='/' style={{ color: "inherit", textDecoration: "none" }}>LEE EUN JAE</Link></div>
            <div className="Menuwrap">
              <div className="Nav-menu"><Link to='/about' style={{ color: "inherit", textDecoration: "none" }}>ABOUT</Link></div>
              <div className="Nav-menu"><Link to='/philosophy' style={{ color: "inherit", textDecoration: "none" }}>PHILOSOPHY</Link></div>
              <div className="Nav-menu"><Link to='/dev' style={{ color: "inherit", textDecoration: "none" }}>DEV</Link></div>
              <div className="Nav-menu"><Link to='/art' style={{ color: "inherit", textDecoration: "none" }}>ART</Link></div>
              <div className="Nav-menu"><Link to='/sport' style={{ color: "inherit", textDecoration: "none" }}>SPORT</Link></div>
              <div className="Nav-menu"><Link to='/contact' style={{ color: "inherit", textDecoration: "none" }}>CONTACT</Link></div>
            </div>
          </div>
        </div>
      )}
      {isTabletOrMobile && <div>
        <div className="Navigate">
          <div className="Logo"><Link to='/' style={{ color: "inherit", textDecoration: "none" }}>LEE EUN JAE</Link></div>
          <div className="Menuwrap">
            <div className="Nav-menu-mobile"><Link to='/about' style={{ color: "inherit", textDecoration: "none" }}><FaCommentAlt /></Link></div>
            <div className="Nav-menu-mobile"><Link to='/philosophy' style={{ color: "inherit", textDecoration: "none" }}><FaUserGraduate /></Link></div>
            <div className="Nav-menu-mobile"><Link to='/dev' style={{ color: "inherit", textDecoration: "none" }}><FaCode /></Link></div>
            <div className="Nav-menu-mobile"><Link to='/art' style={{ color: "inherit", textDecoration: "none" }}><FaPaintBrush /></Link></div>
            <div className="Nav-menu-mobile"><Link to='/sport' style={{ color: "inherit", textDecoration: "none" }}><FaRunning /></Link></div>
            <div className="Nav-menu-mobile"><Link to='/contact' style={{ color: "inherit", textDecoration: "none" }}><FaEnvelope /></Link></div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default Navibar;
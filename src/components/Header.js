/* eslint-disable */

import { useMediaQuery } from 'react-responsive';
import { FaCommentAlt, FaUserGraduate, FaCode, FaPaintBrush, FaRunning, FaEnvelope } from 'react-icons/fa';

function Header() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return (
      <div>
        {isDesktopOrLaptop && 
        <div>
            <div className="Header"></div>
        </div>
        }
        {isTabletOrMobile && (
          <div>
            <div className="Navigate">
              <div className="Logo">LEE EUN JAE</div>
              <div className="Menuwrap">
                <div className="Nav-menu-mobile">
                  <FaCommentAlt />
                </div>
                <div className="Nav-menu-mobile">
                  <FaUserGraduate />
                </div>
                <div className="Nav-menu-mobile">
                  <FaCode />
                </div>
                <div className="Nav-menu-mobile">
                  <FaPaintBrush />
                </div>
                <div className="Nav-menu-mobile">
                  <FaRunning />
                </div>
                <div className="Nav-menu-mobile">
                  <FaEnvelope />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default Header;
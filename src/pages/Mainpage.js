/* eslint-disable */
import { useMediaQuery } from 'react-responsive';
import { FaMapMarkerAlt, FaUser, FaCalendar, FaPhoneAlt, FaEnvelope, FaUserGraduate } from "react-icons/fa";



function Mainpage() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div>
            {isDesktopOrLaptop && (
                <div className="Mainpage-wrapper">
                    <div className="Main-card">
                        <div className="Main-card-img-container">
                            <img className="Main-card-img" src="img/main/profile.png">

                            </img>
                        </div>
                        <div className="Main-card-content">
                            <div className="Main-card-name">Eunjae Tony Lee</div>
                            <div className="Main-card-text"> - 웹 프론트엔드 & ML 개발자</div>
                            <div className="Main-card-badge-wrapper">
                                <div className='Main-card-badge-shelf'>
                                    <div className='Main-card-badge'>
                                        <div className='Badge-icon'><FaUser /></div>
                                        <div className='Badge-content'>
                                            <div className='Badge-title'>이름</div>
                                            <div className='Badge-text'>이은재</div>
                                        </div>
                                    </div>
                                    <div className='Main-card-badge'>
                                        <div className='Badge-icon'><FaMapMarkerAlt /></div>
                                        <div className='Badge-content'>
                                            <div className='Badge-title'>주소지</div>
                                            <div className='Badge-text'>서울특별시 동작구</div>
                                        </div>
                                    </div>
                                    <div className='Main-card-badge'>
                                        <div className='Badge-icon'><FaCalendar /></div>
                                        <div className='Badge-content'>
                                            <div className='Badge-title'>생년월일</div>
                                            <div className='Badge-text'>93.02.26</div>
                                        </div>
                                    </div>                                </div>
                                <div className='Main-card-badge-shelf'>
                                    <div className='Main-card-badge'>
                                        <div className='Badge-icon'><FaPhoneAlt /></div>
                                        <div className='Badge-content'>
                                            <div className='Badge-title'>연락처</div>
                                            <div className='Badge-text'>010-6289-6443</div>
                                        </div>
                                    </div>
                                    <div className='Main-card-badge'>
                                        <div className='Badge-icon'><FaEnvelope /></div>
                                        <div className='Badge-content'>
                                            <div className='Badge-title'>이메일</div>
                                            <div className='Badge-text'>lpl2001@naver.com</div>
                                        </div>
                                    </div>
                                    <div className='Main-card-badge'>
                                        <div className='Badge-icon'><FaUserGraduate /></div>
                                        <div className='Badge-content'>
                                            <div className='Badge-title'>학력</div>
                                            <div className='Badge-text'>중앙대학교</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            )
            }
            {
                isTabletOrMobile && <div className="Mainpage-wrapper">
                    <div className="Main-card">
                        <div className="Main-card-img-container-mobile">
                            <img className="Main-card-img-mobile" src="img/main/profile.png">

                            </img>
                        </div>
                    </div>
                </div>
            }


        </div >
    )
}

export default Mainpage;
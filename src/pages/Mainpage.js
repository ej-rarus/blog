/* eslint-disable */
import { useMediaQuery } from 'react-responsive';

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
                            <div className="Main-card-text">안녕</div>
                        </div>

                    </div>
                </div>
            )}
            {isTabletOrMobile && <div className="Mainpage-wrapper">
                <div className="Main-card">
                    <div className="Main-card-img-container-mobile">
                        <img className="Main-card-img-mobile" src="img/main/profile.png">

                        </img>
                    </div>
                    <div className="Main-card-content">
                        <div className="Main-card-name-mobile">Eunjae Tony Lee</div>
                        <div className="Main-card-text-mobile">안녕</div>
                    </div>

                </div>
            </div>}


        </div>
    )
}

export default Mainpage;
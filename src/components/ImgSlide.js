/* eslint-disable */

import React from "react";


function ImgSlide() {
    let currentIdx = 0;

    return(
        <div className="ImgSlide-wrapper">
            <div className="ImgSlide-slide-box">
                <div className="ImgSlide-slide-list">
                    <div className="Imgslide-content"></div>
                </div>
            </div>
            <div className="ImgSlide-btn-box">
                <button  type="button" className="ImgSlide-btn-prev" onClick={()=>{

                }}>Prev</button>
                <button  type="button" className="ImgSlide-btn-next">Next</button>
            </div>
            <ul className="ImgSlide-pagination"></ul>
                
        </div>
    )
}


export default ImgSlide;
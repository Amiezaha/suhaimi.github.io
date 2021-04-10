import React from "react";
import "./AnimatedTitle.css"

function AnimatedTitle({mainTitle,subTitle,bannerDesc}) {
  return (
    <>
      <div className="banner__home__content">
        <div className="banner__home_title slide-up"> {mainTitle}</div>
        <div className="banner__home_subtitle slide-up">
         <span style={{color:'#FFB907'}}>{subTitle}</span> 
        </div>
        <div className="banner__home_desc slide-up">
        {bannerDesc}
        </div>
      </div>
    </>
  );
}

export default AnimatedTitle;

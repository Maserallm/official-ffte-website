import React from "react";
// import src from "../images/Eazy_these_days.mp4";

const mp4 =
  "https://res.cloudinary.com/dtxylaqlc/video/upload/v1612414975/FFTE%20Website/Eazy_these_days_eyh6pn.mp4";

const wemb =
  "https://res.cloudinary.com/dtxylaqlc/video/upload/v1612414975/FFTE%20Website/Eazy_these_days_eyh6pn.webm";
// const desktopVideo =
//   "https://res.cloudinary.com/hcqtx6vth/video/upload/v1607219729/ffte_website_video_02_tdetv0.mp4";
// const tabletVideo =
//   "https://res.cloudinary.com/hcqtx6vth/video/upload/v1607219729/ffte_website_video_02_tdetv0.mp4";
// const mobileVideo =
//   "https://res.cloudinary.com/hcqtx6vth/video/upload/v1607219729/ffte_website_video_02_tdetv0.mp4";

const BGvideo = () => {
  // const getVideoSrc = width => {
  //   if (width >= 1080) return desktopVideo;
  //   if (width >= 720) return tabletVideo;
  //   if (width <= 480) return mobileVideo;
  //   return mobileVideo;
  // };

  // const src = getVideoSrc(window.innerWidth);

  return (
    <>
      <video
        className="vid_21"
        autoPlay={true}
        loop={true}
        playsInline
        muted
        preload
        poster="https://res.cloudinary.com/dtxylaqlc/image/upload/v1622561095/FFTE%20Website/maxresdefault_qkcjzu.jpg"
        // style={{
        //   minWidth: "65%",
        //   minHeight: "100%",
        //   position: "relative",
        //   top: "0px",
        //   left: "16%",
        //   overflow: "hidden"
        // }}
      >
        <source type="video/webm" src={wemb} />
        <source type="video/mp4" src={mp4} />
      </video>
    </>
  );
};

export default BGvideo;

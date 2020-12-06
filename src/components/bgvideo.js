import React from "react";
const desktopVideo =
  "https://res.cloudinary.com/hcqtx6vth/video/upload/v1607219729/ffte_website_video_02_tdetv0.mp4";
const tabletVideo =
  "https://res.cloudinary.com/hcqtx6vth/video/upload/v1607219729/ffte_website_video_02_tdetv0.mp4";
const mobileVideo =
  "https://res.cloudinary.com/hcqtx6vth/video/upload/v1607219729/ffte_website_video_02_tdetv0.mp4";

const BGvideo = () => {
  const getVideoSrc = width => {
    if (width >= 1080) return desktopVideo;
    if (width >= 720) return tabletVideo;
    if (width <= 480) return mobileVideo;
    return mobileVideo;
  };

  const src = getVideoSrc(window.innerWidth);

  return (
    <>
      <video
        className="vid_2"
        autoPlay={true}
        loop={true}
        playsInline
        muted
        // style={{
        //   width: "81vw";
        //   height: "88vh";
        //   overflow: "hidden";
        //   margin-left: "14%";
        // }}
      >
        <source type="video/mp4" src={src} />
      </video>
    </>
  );
};

export default BGvideo;

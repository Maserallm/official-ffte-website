import React from "react";
import { FaApple, FaYoutube, FaSpotify, FaSoundcloud } from "react-icons/fa";
import styled from "styled-components";
import EazySignature from "../components/EazySignatureSVG";

const eazysign = "../images/eazysignature01_ptlwh3.svg";
// const eazysign =
//   "https://res.cloudinary.com/dtxylaqlc/image/upload/v1605326761/eazysignature01_ptlwh3.png";

const ArtistStyles = styled.div`
  /* Body config */
  ul {
    list-style: none;
    display: flex;
  }

  .header_main {
    display: grid;
    grid-template-rows: auto auto;
  }

  .menu {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }

  .menu h1 {
    margin-left: 20px;
  }

  .menu-items {
    position: absolute;
    right: 0;
    padding: 10px;
  }

  .menu-items li {
    padding-left: 15px;
    padding-right: 15px;
  }

  .out_cover {
    display: grid;
    margin: 75px 150px 110px 150px;
    grid-template-columns: 12fr;
    grid-template-rows: 12fr;
    height: auto;
  }

  .cover {
    display: flex;
    background-size: cover;
    margin-top: 10px;
    min-height: 200px;
    background-position: bottom right;
    padding: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 50;
  }

  .cover img {
    width: 100%;
  }

  .cover svg {
    width: 100%;
  }

  .eazy-signature {
    width: 100%;
  }

  /* Artist Profiles and Photos*/
  .sidebar {
    display: block;
  }

  .sidebar_items {
    display: flex;
    flex-direction: column;
    line-height: 1.8rem;
  }

  .header_artist_photo {
    display: grid;
    grid-template-columns: 1fr 12fr 1fr;
  }

  .header_artist_photo img {
    width: 100%;
  }

  .header_artist_info {
    display: grid;
    justify-content: start;
    align-items: center;
    padding: 5%;
    line-height: 1.7rem;
    grid-column: span 1/3;
  }

  .eazy {
    max-width: 100%;

    transition: ease;
  }

  .bio {
    margin: 0 1rem;
  }

  video {
    width: 100%;
    height: 100%;
  }

  .music_content {
    margin-top: 2rem;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  .music_content img {
    width: 100%;
    transition: transform 0.2s;
  }

  .music_content_item img {
    filter: blur(0px);
    transition: 0.533s;
  }
  .music_content_item img:hover {
    filter: blur(4px);
  }

  .music_content_svg {
    width: 100%;
    position: unset;
  }

  .music_content_item {
    position: relative;
    cursor: pointer;
  }

  .track_info {
    opacity: 0;
    display: grid;
    justify-items: center;
    position: absolute;
    top: 15%;
    left: 25%;
    color: white;
    transition: transform 0.2s;
  }

  .track_info ul {
    display: grid;
  }

  .music_links {
    list-style: none;
    display: flex;
    margin: 0px -30px;
    justify-content: center;
  }

  .music_links_fa {
    font-size: 40px;
    margin: 0px 50px;
    color: black;
  }

  #why_not_link {
    padding-right: 15px;
  }

  .music_links li {
    max-width: 200px;
  }

  @media (max-width: 400px) {
    body {
      overflow-x: none;
    }
    .header_main {
      width: fit-content;
    }

    .out_cover {
      margin: auto;
    }

    .cover {
      padding: 0px;
      margin-top: 0px;
    }

    .cover img {
      width: 350px;
    }

    .cover svg {
      width: 60%;
    }

    .music_content {
      margin-top: 2rem;
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }

    .header_artist_info {
      padding: 0px;
    }
    .music_links li {
      max-width: 100px;
    }

    .music_links {
      padding: 0px;
      margin: 0px;
      margin-left: -50px;
    }

    .music_content_svg {
      width: 100%;
      position: unset;
    }

    #why_not_link {
      padding-right: 15px;
    }
  }
`;

const Artist = () => {
  return (
    <ArtistStyles>
      <div>
        {/* <!-- Header menu and artist photo --> */}
        <div className="header_main">
          {/* <div className="menu"></div> */}

          {/* <!-- Header Landing Cover --> */}
          <div className="out_cover">
            <div className="cover">
              {/* <img src={eazysign} alt="Eazy Signature" /> */}
              {/* <img
                src="../images/eazysignature01_ptlwh3.svg"
                alt="Eazy Signature"
              /> */}
              <EazySignature />
            </div>
          </div>

          {/* <!-- Artist Profile --> */}
          <div className="header_artist_photo">
            <div className="header_artist_info">
              <div>
                <img
                  src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1613185467/Eazy_1_psd_ahpvp6.jpg"
                  // src="https://res.cloudinary.com/hcqtx6vth/image/upload/v1594993296/DA463AAE-7D40-40F8-9EDB-8F8B5D2C6EA4_d55a3a.jpg"
                  alt="EAZY"
                  className="eazy"
                />
                {/* <img
                  src="https://woo-videos.s3.us-east-2.amazonaws.com/eazycover.jpeg"
                  alt="EAZY"
                  className="eazy"
                /> */}
              </div>
              <div className="bio">
                <h4>EAZY</h4>
                <p>
                  Looking into the past of Eazy’s musical journey, 2018-2019
                  were promising years for the aspiring artist. From his 2018
                  project,
                  <e>Forever Link</e>, highlighting the loyalty amongst his
                  relationships and surroundings to his well-established
                  collaboration with fellow Polk County artist, Hard Nard, in{" "}
                  <e>Why Not Snap</e>. 2019, proved to be a key year for the
                  artist growth.
                  <br />
                  <br />
                  Additionally, B5, Eazy’s business partner, has helped the
                  artist reform the team and each members role, formally
                  creating FFTE. With visions on making the team a corporation.
                  From there on, Eazy linked up with Coldblood a producer from
                  Georgia who has caught the rapper’s eyes with his unique
                  beats. Working with Eazy for years, Coldblood has risen to a
                  valuable position in FFTE as the main producer and the
                  official A&R of the team.
                  <br />
                  <br />
                  Furthermore, with the improved position of FFTE, Eazy is a
                  force to be reckoned with the new release of music coming
                  soon.
                </p>
              </div>
              <div className="music_content">
                <div className="music_content_item">
                  <a
                    href="https://www.youtube.com/watch?v=Geo5j6x3TPU"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1623988766/FFTE%20Website/Do_Away_With_y4alfe.png"
                      alt="Do Away With"
                    />
                  </a>
                  <ul className="music_links">
                    <li>
                      <a
                        href="https://music.apple.com/us/album/do-away-with-single/1572899711"
                        target="_blank"
                        rel="noopener noreferrer" // eslint-disable-next-line
                      >
                        {/* eslint-disable-next-line*/}
                        <p className="music_links_fa">
                          <FaApple />
                          <i className="fab fa-apple"></i>
                        </p>
                        {/* <Apple /> */}
                      </a>
                    </li>
                    {/* Add Spotify link */}
                    <li>
                      <a
                        href="https://open.spotify.com/album/4EfneqPLoK2Te0dbVIqMaP?si=s8WJxebMTnKoGr6iNp5X4g&dl_branch=1"
                        target="_blank"
                        rel="noopener noreferrer" // eslint-disable-next-line
                      >
                        {/* eslint-disable-next-line*/}
                        <p className="music_links_fa">
                          <FaSpotify />
                          <i className="fab fa-spotify"></i>
                        </p>
                        {/* <Spotify /> */}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://music.youtube.com/playlist?list=OLAK5uy_mokFdfcGzNkwcMQopt06ERMgKPbvQHAlc&feature=share"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="music_links_fa">
                          <FaYoutube />
                          <i className="fab fa-youtube"></i>
                        </p>
                        {/* <Youtube /> */}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="music_content_item">
                  <a
                    href="https://youtu.be/PyWJ61rRDzA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1612934248/FFTE%20Website/eazy_pinky_ring___these_days_tkeeew.jpg"
                      alt="These Days / Pinky Rings"
                    />
                  </a>
                  <ul className="music_links">
                    <li>
                      <a
                        href="https://music.apple.com/us/album/these-days-single/1551555471"
                        target="_blank"
                        rel="noopener noreferrer" // eslint-disable-next-line
                      >
                        {/* eslint-disable-next-line*/}
                        <p className="music_links_fa">
                          <FaApple />
                          <i className="fab fa-apple"></i>
                        </p>
                        {/* <Apple /> */}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://open.spotify.com/album/5jBex2WD36ryvVN8Lu8rU9?si=vbJlXhtMQ9miYefVWHXYxQ"
                        target="_blank"
                        rel="noopener noreferrer" // eslint-disable-next-line
                      >
                        {/* eslint-disable-next-line*/}
                        <p className="music_links_fa">
                          <FaSpotify />
                          <i className="fab fa-spotify"></i>
                        </p>
                        {/* <Spotify /> */}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/PyWJ61rRDzA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="music_links_fa">
                          <FaYoutube />
                          <i className="fab fa-youtube"></i>
                        </p>
                        {/* <Youtube /> */}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="music_content_item">
                  <a
                    href="https://www.youtube.com/playlist?list=PL30TohooSnj367AjiemnRgSXFNT1NhAHS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://res.cloudinary.com/hcqtx6vth/image/upload/v1594993619/sumthing2holdfornow_ep_ossequ.jpg"
                      alt="Sumthing 2 Hold For Now"
                    />
                  </a>
                  <ul className="music_links">
                    <li>
                      <a
                        href="https://soundcloud.com/eazyffte/sets/sumthing-2-hold-for-now"
                        target="_blank"
                        rel="noopener noreferrer" // eslint-disable-next-line
                      >
                        {/* eslint-disable-next-line*/}
                        <p className="music_links_fa">
                          <FaSoundcloud />
                          <i className="fab fa-soundcloud"></i>
                        </p>
                        {/* <Apple /> */}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/playlist?list=PL30TohooSnj367AjiemnRgSXFNT1NhAHS"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="music_links_fa">
                          <FaYoutube />
                          <i className="fab fa-youtube"></i>
                        </p>
                        {/* <Youtube /> */}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="music_content_item">
                  <a
                    href="https://www.youtube.com/playlist?list=PL30TohooSnj0EbBCXkBX_vDMU-jwFkx3u"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://res.cloudinary.com/hcqtx6vth/image/upload/v1594993506/why_not_snap_nger8o.jpg"
                      alt="Why Not Snap"
                    />
                  </a>
                  <ul className="music_links">
                    <li id="why_not_link">
                      <a
                        href="https://www.youtube.com/playlist?list=PL30TohooSnj0EbBCXkBX_vDMU-jwFkx3u"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="music_links_fa">
                          <FaYoutube />
                          <i className="fab fa-youtube"></i>
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="music_content_item">
                  <a
                    href="https://www.youtube.com/playlist?list=OLAK5uy_ne0ahSzHrf2V-cn1MFcKLsZOy74MnCwws"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://res.cloudinary.com/hcqtx6vth/image/upload/v1594993635/foreverlink01_xcvqvj.jpg"
                      alt="Forever Link"
                      width=""
                    />
                  </a>
                  <ul className="music_links">
                    <li>
                      <a
                        href="https://music.apple.com/us/album/forever-link-ep/1439140729"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="music_links_fa">
                          <FaApple />
                          <i className="fab fa-apple"></i>
                        </p>
                        {/* <Apple /> */}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://open.spotify.com/album/3Ua56fWXUnAr83GApoyAa6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="music_links_fa">
                          <FaSpotify />
                          <i className="fab fa-spotify"></i>
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/playlist?list=OLAK5uy_ne0ahSzHrf2V-cn1MFcKLsZOy74MnCwws"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="music_links_fa">
                          <FaYoutube />
                          <i className="fab fa-youtube"></i>
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ArtistStyles>
  );
};

export default Artist;

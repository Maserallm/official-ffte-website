import React from "react";
import ConnectStyles from "../styles/ConnectStyles";
import ContactForm from "../components/contactform";
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaStore
} from "react-icons/fa";
// import Staff from "../components/staff"

const eazystate =
  "https://res.cloudinary.com/dtxylaqlc/image/upload/v1605330751/eazystatement0528_l0mmyr.png";

const b5statement =
  "https://res.cloudinary.com/dtxylaqlc/image/upload/v1605330751/b5statement_cxhpgn.png";

const coldbloodstatement =
  "https://res.cloudinary.com/dtxylaqlc/image/upload/v1605330751/coldbloodstatement_k1zpvs.png";

const Connect = () => {
  // eslint-disable-next-line
  const resize = () => {
    // eslint-disable-next-line
    let reorder = window.innerWidth <= 703;
  };

  const resizeWindow = () => typeof window !== `undefined`;

  return (
    <ConnectStyles>
      <div className="container">
        <div className="header-main">
          <div className="header-main__title">
            <h1>Staff Only</h1>
          </div>

          <div className="about-ffte">
            <p>
              Far From The East has less to do with location but more to do with
              embracing the idea of reaching your goals.
            </p>
          </div>

          <div className="team">
            <div className="team-info">
              <div className="team-members ">
                <figure>
                  <img
                    src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1613258232/FFTE%20Website/Eazy_2_2_gzqs3k.jpg"
                    // src="https://res.cloudinary.com/hcqtx6vth/image/upload/v1595211033/eazybiocloudinary_j7zlfk.png"
                    alt="EAZY"
                  />
                  <figcaption>
                    <ul className="eazy-media">
                      EAZY | CEO
                      <li>
                        <a
                          href="https://www.instagram.com/eazyffte/?hl=en"
                          className="text-dark"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.youtube.com/channel/UCk6xUPzFEHY6TkigqCL-5Iw"
                          className="text-dark"
                        >
                          <FaYoutube />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/Eazy_FFTE"
                          className="text-dark"
                        >
                          <FaTwitter />
                        </a>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                <img
                  src={eazystate}
                  className="eazy-statement"
                  alt="Eazy Statement"
                />
              </div>
              <div className="team-members ">
                {resizeWindow() && window.innerWidth < 704 ? (
                  <>
                    <figure>
                      <img
                        src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1613261986/FFTE%20Website/B5_feb_copy_aakfia.png"
                        // src="https://woo-videos.s3.us-east-2.amazonaws.com/FFTE+ORIGINALS+B5+01.png"
                        alt="B5"
                        width=""
                        height=""
                      />
                      <figcaption>
                        <ul className="eazy-media">
                          B5 | CEO
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://instagram.com/b5_ffte?igshid=1xkr25zidzsyp"
                              className="text-dark"
                            >
                              <FaInstagram />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="mailto:B5ffte@gmail.com"
                              className="text-dark"
                            >
                              <FaEnvelope />
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <img src={b5statement} alt="Words from 5" />
                  </>
                ) : (
                  <>
                    <img
                      src={b5statement}
                      className="b5_statement"
                      alt="Words from 5"
                    />
                    <figure>
                      <img
                        src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1613261986/FFTE%20Website/B5_feb_copy_aakfia.png"
                        alt="B5"
                        className="b5_statement"
                        width="100%"
                        height=""
                      />
                      <figcaption>
                        <ul className="eazy-media">
                          B5 | CEO
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://instagram.com/b5_ffte?igshid=1xkr25zidzsyp"
                              className="text-dark"
                            >
                              <FaInstagram />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="mailto:B5ffte@gmail.com"
                              className="text-dark"
                            >
                              <FaEnvelope />
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                  </>
                )}
              </div>

              <div className="team-members ">
                <figure>
                  <img
                    // src={coldbloodlogo}
                    src="https://res.cloudinary.com/hcqtx6vth/image/upload/v1594993537/coldbloodLOGO_qhzvkg.jpg"
                    alt="ColdBlood"
                    width="100%"
                    height=""
                  />
                  <figcaption>
                    <ul className="eazy-media">
                      ColdBlood | Prod, A&R
                      <li className="cold-media">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/ColdBloodBeats/"
                          className="text-dark"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                      <li className="cold-media">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/ColdBloodBeats"
                          className="text-dark"
                        >
                          <FaTwitter />
                        </a>
                      </li>
                      <li className="cold-media">
                        <a
                          href="https://coldbloodbeats.com/"
                          className="text-dark"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaStore />
                        </a>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                <img src={coldbloodstatement} alt="col blood statement" />
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </ConnectStyles>
  );
};

export default Connect;

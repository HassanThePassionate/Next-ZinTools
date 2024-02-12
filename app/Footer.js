import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="top-footer">
            <div className="social">
              <h5>Follow us</h5>
              <div className="icons">
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook-f"></i>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-middle">
            <div className="footer-list">
              <div className="links">
                <h3>Internal Links</h3>
                <h4>Documentries</h4>
                <h4>Themes</h4>
                <h4>Chorme casts</h4>
              </div>
              <div className="links">
                <h3>Enterprise</h3>
                <h4>Download Chorme Brower</h4>
                <h4>Chorme Browser for enterprise</h4>
                <h4>Chorme Browser devices</h4>
                <h4>ChormeOS</h4>
                <h4>Google Cloud</h4>
                <h4>Google Workspace</h4>
              </div>
              <div className="links">
                <h3>Internal Links</h3>
                <h4>Documentries</h4>
                <h4>Themes</h4>
                <h4>Chorme casts</h4>
              </div>
              <div className="links">
                <h3>Enterprise</h3>
                <h4>Download Chorme Brower</h4>
                <h4>Chorme Browser for enterprise</h4>
                <h4>Chorme Browser devices</h4>
                <h4>ChormeOS</h4>
                <h4>Google Cloud</h4>
                <h4>Google Workspace</h4>
              </div>
              <div className="links">
                <h3>Internal Links</h3>
                <h4>Documentries</h4>
                <h4>Themes</h4>
                <h4>Chorme casts</h4>
              </div>
            </div>
          </div>
          <hr />

          <div className="bottom-footer">
            <div className="footer-logo">
              <h2>
                SilimLinkr <span>Watch</span>
              </h2>
            </div>
            <div className="f-links">
              <p>
                <Link className="a" href="#">
                  PrivLinkcy Policy
                </Link>
              </p>
              <p>
                <Link className="a" href="#">
                  Terms Linknd conditions
                </Link>
              </p>
              <p>
                <Link className="a" href="#">
                  Cookies Policy
                </Link>
              </p>
              <p>
                <Link className="a" href="#">
                  About us
                </Link>
              </p>
              <p>
                <Link className="a" href="#">
                  EULA
                </Link>
              </p>
              <p>
                <Link className="a" href="#">
                  Contact
                </Link>
              </p>
              <div className="svg">
                <svg
                  className="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 -960 960 960"
                >
                  <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

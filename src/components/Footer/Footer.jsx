import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="fixed-bottom footer-59391">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="site-logo">
              <a href="#">Sparks</a>
            </div>
          </div>
        </div>

        {/* <div className="row mb-5"> */}
          {/* <div className="col-md-6 ">
              <ul className="nav-links list-unstyled nav-left">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Policy</a>
                </li>
              </ul>
            </div> */}
          {/* <div className="col-md-6 text-md-right">
              <ul className="nav-links list-unstyled nav-right">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Our works</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div> */}
        {/* </div> */}
        <div className="row">
          <div className="col ">
            <div className="copyright">
              <p>
                <small>Copyright 2022. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

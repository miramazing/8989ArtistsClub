import React from "react";
import SocialTwo from "../../social/SocialTwo";

const logo = "assets/img/root/8989/common/8989-logo.svg";

const CopyRight = () => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md">
        <a href="index.html">
          <img src={logo} alt="" loading="lazy" width="50" />
        </a>
      </div>
      <div className="col-12 col-md text-md-center text-lg-center">
        <p className="ptf-footer-copyright has-black-color">
          ©{new Date().getFullYear()}{" "}
          <span>
            <a
              href="https://www.instagram.com/wecation_/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Wecation
            </a>
          </span>
          . All Rights Reserved.
        </p>
      </div>
      <div className="col-12 col-lg text-md-center text-lg-end">
        <div className="ptf-footer-socials has-black-color ">
          <SocialTwo />
        </div>
      </div>
    </div>
  );
};

export default CopyRight;

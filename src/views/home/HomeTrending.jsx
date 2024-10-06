import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BrandTwo from "../../components/brand/BrandTwo";
import CopyRightThree from "../../components/footer/copyright/CopyRightThree";
import HeaderTrending from "../../components/header/HeaderTrending";
import PortfolioThree from "../../components/portfolio/PortfolioThree";

const HomeTrending = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-trending ">
      <Helmet>
        <title>8989 Young Artists' Club</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderTrending />
      {/* End  HeaderTrending */}

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-trending">
            {/*=============================================
            Start Hero Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>

              <div className="container">
                {/* {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h1 className="fz-130 fz-90--md has-secondary-font fw-normal">
                    We shares the stories of
                    <span className="has-accent-1"> Korean artists</span> living
                    in the age of
                    <span className="has-accent-1"> capitalism.</span>
                  </h1>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>

                <div className="row">
                  <div className="col-xl-7 d-none d-xl-block">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": " 5rem" }}
                    ></div>
                    {/* {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="200"
                    >
                      {/* <!--Mask Image--> */}
                      <div
                        className="ptf-mask-image mx-auto"
                        style={{ maxWidth: "18.25rem" }}
                      >
                        {/* <img
                          className="spin"
                          src="assets/img/root/home-trending/circle-text.png"
                          alt="circle text"
                          loading="lazy"
                        /> */}
                        <img
                          src="assets/img/root/partners/wecation/logo-long.jpeg"
                          alt="circle logo"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    {/* {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-30" style={{ paddingRight: "1rem" }}>
                        The social enterprise Wecation is a Busan-based social
                        enterprise supporting diverse artists through ESG art
                        projects and fostering cultural inclusion and economic
                        independence.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
            Start Latest Project Section 
            ============================================== */}
            <section>
              <div className="container-xxl">
                {/* {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-secondary-font fw-normal">
                    Latest Projects
                  </h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.875rem" }}
                ></div>
                {/* {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="100"
                >
                  <p className="fz-24" style={{ maxWidth: "16.875rem" }}>
                    Creativity is at the heart of all our projects.
                  </p>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
              </div>
              {/* End .container */}

              <div className="container-xxl">
                {/* {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "4.75rem",
                      "--bs-gutter-y": "4.75rem",
                    }}
                  >
                    <PortfolioThree />
                  </div>
                </div>
                {/* End portfolio */}
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "3.125rem" }}
                ></div>
                <div className="text-center">
                  {/* {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <Link
                      className="ptf-circle-link ptf-circle-link--style-2"
                      to="/works-grid"
                    >
                      All <br />
                      Projects
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        style={{ height: "1em" }}
                        viewBox="0 0 17 17"
                      >
                        <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>
              </div>
              {/* End .container-xxl */}
            </section>
            {/* End Portfolio Endpoint */}

            <section>
              <div className="container">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": "1px",
                  }}
                ></div>
              </div>
            </section>
            {/* End section devider */}

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-secondary-font fw-normal">
                    Our Partners
                  </h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                ></div>
                {/* <!--Clients List--> */}
                <BrandTwo />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": "1px",
                  }}
                ></div>
              </div>
            </section>
            {/* End section devider */}

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
              <div className="container text-center">
                <div className="d-inline-flex text-start">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <div className="fz-30"></div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.25rem" }}
                    ></div>
                    <div
                      className="
                        fz-130
                        fz-90--md
                        has-black-color has-secondary-font
                        fw-normal
                        lh-1p1
                      "
                    >
                      <Link className="ptf-filled-link" to="/contact">
                        Contact Us
                      </Link>
                    </div>
                    <div className="fz-80 has-black-color">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        style={{ height: "1em" }}
                        viewBox="0 0 17 17"
                      >
                        <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": "1px",
                  }}
                ></div>
              </div>
            </section>
            {/* End section devider */}
          </div>
          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}

      {/*=============================================
        Start Footer Section 
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-2">
        <div className="container-xxl">
          <div className="ptf-footer__top">{/* <FooterThree /> */}</div>
          {/* End .ptf-footer__top */}

          <div className="ptf-footer__bottom">
            <CopyRightThree />
          </div>
          {/* End .ptf-footer__bottom */}
        </div>
      </footer>
    </div>
  );
};

export default HomeTrending;

import React from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const portfolioMenu = ["All", "Activity", "Project", "Work", "Design/Branding"];

const portfolioContent = [
  {
    tabContent: [
      { img: "work-1", meta: "Activity", title: "Open Code 2024" },
      { img: "work-2", meta: "Project", title: "Art Map Project" },
      { img: "work-3", meta: "Activity", title: "Open Code 2024" },
      { img: "work-4", meta: "Project", title: "Wecation x Found out" },
      { img: "work-5", meta: "Design", title: "화혜사계 포스터 디자인" },
      { img: "work-6", meta: "Design", title: "차사강림 포스터 디자인" },
      { img: "work-7", meta: "Work", title: "우리동네 마을 지도" },
      // { img: "work-8", meta: "Work", title: "작품명 : " },
      // { img: "work-9", meta: "Work", title: "작품명 : " },
    ],
  },
  {
    tabContent: [
      { img: "work-1", meta: "Activity", title: "Open Code 2024" },
      { img: "work-3", meta: "Activity", title: "Open Code 2024" },
    ],
  },
  {
    tabContent: [
      { img: "work-2", meta: "Project", title: "Art Map Project" },
      { img: "work-4", meta: "Project", title: "Wecation x Found out" },
    ],
  },
  {
    tabContent: [
      { img: "work-8", meta: "Work", title: "작품명 : " },
      { img: "work-9", meta: "Work", title: "작품명 : " },
    ],
  },
  {
    tabContent: [
      { img: "work-5", meta: "Design", title: "화혜사계 포스터 디자인" },
      { img: "work-6", meta: "Design", title: "차사강림 포스터 디자인" },
    ],
  },
];

const PortfolioSix = () => {
  return (
    <>
      <Tabs>
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <TabList className="ptf-filters ptf-filters--style-1">
            {portfolioMenu.map((item, i) => (
              <Tab className="filter-item " key={i}>
                {item}
              </Tab>
            ))}
          </TabList>
        </div>

        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
        ></div>

        {portfolioContent.map((item, i) => (
          <TabPanel key={i}>
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
                {item.tabContent.map((singleItem, i) => (
                  <div className="col-lg-6" key={i}>
                    <article className="ptf-work ptf-work--style-1">
                      <div className="ptf-work__media">
                        <Link
                          className="ptf-work__link"
                          to="/works-showcase"
                        ></Link>
                        <img
                          src={`assets/img/home/modern/${singleItem.img}.png`}
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="ptf-work__meta">
                        <div className="ptf-work__category">
                          {singleItem.meta}
                        </div>
                        <h4 className="ptf-work__title">
                          <Link to="/works-showcase">{singleItem.title}</Link>
                        </h4>
                      </div>
                    </article>
                  </div>
                ))}
                {/* End .col */}
              </div>
            </div>

            {/* End portfolio */}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default PortfolioSix;

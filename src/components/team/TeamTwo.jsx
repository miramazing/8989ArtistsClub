import React from "react";

const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1-m",
    title: "Oh Jungmin",
    designation: "Founder",
  },
  {
    delayAnimation: "100",
    img: "no-image",
    title: "Seon Gibbeum",
    designation: "Artist",
  },
  {
    delayAnimation: "200",
    img: "no-image",
    title: "Kim Youngmi",
    designation: "Artist",
  },
  {
    delayAnimation: "300",
    img: "no-image",
    title: "Kim Sunha",
    designation: "Artist",
  },
  {
    delayAnimation: "0",
    img: "new-member",
    title: "",
    designation: "",
  },
];

const TeamTwo = () => {
  return (
    <>
      {teamContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          {/* <!--Team Member--> */}
          <div className="ptf-team-member">
            <div className="ptf-team-member__avatar">
              <div className="shadow-effect"></div>
              <a href="#">
                {" "}
                <img
                  src={`assets/img/root/team/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="ptf-team-member__content">
              <h6 className="ptf-team-member__name">
                <a href="#">{val.title}</a>
              </h6>
              <p className="ptf-team-member__function">{val.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamTwo;

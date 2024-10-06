import React from "react";

const iconList = [
  { delayAnimation: "0", icon: "wecation" },
  // { delayAnimation: "100", icon: "logo-2" },
  // { delayAnimation: "200", icon: "logo-3" },
  // { delayAnimation: "300", icon: "logo-4" },
  // { delayAnimation: "400", icon: "logo-5" },
];

const BrandTwo = () => {
  return (
    <ul
      className="
          ptf-clients-list
          ptf-clients-list--start
          ptf-clients-list--style-1
        "
      data-columns="5"
    >
      {iconList.map((val, i) => (
        <li
          className="ptf-clients-list__item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <img
            src={`assets/img/root/partners/${val.icon}.png`}
            alt="brand logo"
            loading="lazy"
            width="200"
          />
        </li>
      ))}
    </ul>
  );
};

export default BrandTwo;

import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "8989 Artists' Club",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item",
    dropDownItems: [
      {
        name: "About Us",
        routerPath: "/team",
      },
    ],
  },
  {
    name: "Portfolio",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Art works",
        routerPath: "/works-carousel",
      },
      {
        name: "Activities",
        routerPath: "/works-grid",
      },
    ],
  },
  {
    name: "Shop",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Art goods",
        routerPath: "/blog-grid",
      },
    ],
  },

  // {
  //   name: "",
  //   activeClass: "",
  //   menuClass: "two-columns",
  //   dropDownItems: [
  //     {
  //       name: "About Us",
  //       routerPath: "/about-us",
  //     },
  //     {
  //       name: "About Me",
  //       routerPath: "/about-me",
  //     },
  //     {
  //       name: "Services",
  //       routerPath: "/service",
  //     },
  //     {
  //       name: "Service Details",
  //       routerPath: "/service-details",
  //     },
  //     {
  //       name: "Pricing",
  //       routerPath: "/pricing",
  //     },
  //     {
  //       name: "Team",
  //       routerPath: "/team",
  //     },
  //     {
  //       name: "FAQ",
  //       routerPath: "/faq",
  //     },
  //     {
  //       name: "Contact",
  //       routerPath: "/contact",
  //     },
  //     {
  //       name: "Page 404",
  //       routerPath: "/404",
  //     },
  //     {
  //       name: "Coming Soon",
  //       routerPath: "/coming-soon",
  //     },
  //   ],
  // },
];

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {menuContent?.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <a href="#" className={item.activeClass}>
            <span>{item.name}</span>
          </a>

          <ul className="sub-menu mega">
            {item.dropDownItems.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath}>
                  {" "}
                  <span>{val.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;

import React from "react";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import Social from "../../social/Social";

const menuContent = [
  {
    name: "Home",
    dropDownItems: [
      {
        name: "About Us",
        routerPath: "/team",
      },
    ],
  },
  {
    name: "Portfolio",
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
];

const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <SubMenu title={item.name} key={i}>
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem key={i}>
                      <Link to={val.routerPath}>{val.name}</Link>
                    </MenuItem>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>Wecation</span>. All Rights
          Reserved. <br />.
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;

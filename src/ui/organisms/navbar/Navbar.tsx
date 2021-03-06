import { NavLink } from "react-router-dom";
import { useStyleOnNavbarScrolled } from "../../../custom-hooks/useStyleOnNavbarScrolled";
import { Toggle } from "../../atoms/toggle-theme/Toggle";
import "./navbar.css";

interface Props {}

export const Navbar = (props: Props) => {
  const listNav = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/about",
      text: "About",
    },
    {
      path: "/projects",
      text: "Projects",
    },
  ];

  useStyleOnNavbarScrolled({
    className: "navbar-scrolled",
    idNavbar: "mainNavbar",
  });

  return (
    <div
      className="navbar w-screen h-16 flex justify-center fixed z-30"
      id="mainNavbar"
    >
      <div className="container flex justify-around">
        <div className="log-section"></div>

        <nav className="h-full">
          <ul className="h-full flex">
            {listNav.map((item) => (
              <li key={item.text} className="h-full">
                <NavLink
                  className="h-full flex items-center relative"
                  activeClassName="item-active"
                  exact
                  to={item.path}
                >
                  <span className="px-5 text-xl text-primary">{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center pl-6 pr-7">
          <Toggle />
        </div>
      </div>
    </div>
  );
};

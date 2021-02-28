import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { textCapitalize } from "../../utils/typography";

const Header = () => {
  const { pathname } = useLocation();
  const routes = useMemo(
    () => [
      {
        name: "home",
        link: "/",
      },
      {
        name: "page one",
        link: "/page1",
      },
    ],
    []
  );

  return (
    <header className="Header">
      {routes.map((route, index) => (
        <Link
          className={`NavLink ${
            route.link === pathname ? "NavLink--active" : ""
          }`}
          to={route.link}
          key={`route-${index}`}
        >
          {textCapitalize(route.name)}
        </Link>
      ))}
    </header>
  );
};

export default Header;

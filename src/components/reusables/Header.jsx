import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const routes = useMemo(
    () => [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Page One",
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
          {route.name}
        </Link>
      ))}
    </header>
  );
};

export default Header;

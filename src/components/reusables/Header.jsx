import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const routes = useMemo(
    () => [
      {
        name: "Home",
        link: "/home",
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
        <Link className="NavLink" to={route.link} key={`route-${index}`}>
          {route.name}
        </Link>
      ))}
    </header>
  );
};

export default Header;

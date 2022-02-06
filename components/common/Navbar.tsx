import React from "react";
import useSWR from "swr";

import CustomLink from "./CustomLink";
import Maybe from "./Maybe";
import NavLink from "./NavLink";
//import { usePageDispatch } from "../../lib/context/PageContext";
import storage from "../../lib/utils/storage";

const Navbar = () => {
  //const setPage = usePageDispatch();
  const { data: currentUser } = useSWR("user", storage);
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <CustomLink className="navbar-brand" href="/" as="/">
          <span >SimpleBee</span>
        </CustomLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink href="/" as="/">
              <span>My Account</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
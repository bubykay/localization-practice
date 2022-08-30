import React from "react";

import logo from "../images/logo.svg";
import { useIntl } from "react-intl";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const intl = useIntl();
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img className="navbar-logo" src={logo} alt="logo" />

          <strong>
            {intl.formatMessage({
              id: "app_name",
              defaultMessage: "Grootbasket",
            })}
          </strong>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            {intl.formatMessage({
              id: "weekly_basket_link",
              defaultMessage: "Weekly Basket",
            })}
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

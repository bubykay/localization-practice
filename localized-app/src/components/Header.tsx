import React from "react";

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <h1 className="title is-4 has-text-centered mb-5">
        In this Week's Grootbasket — 21 Jul 2021
      </h1>
      <p>2,101 baskets delivered</p>
    </div>
  );
}
export default Header;
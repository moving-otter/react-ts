import React from 'react';
import './HwHeader.scoped.scss';
import {HashRouter, NavLink} from 'react-router-dom';
import favicon from "@assets/favicon.png";

const HwHeader: React.FC = () => {
  return (
      <div className="hwHeader">
        <img src={favicon} alt="logo"/>

        <HashRouter>
          <NavLink exact to="/">React-ts storage</NavLink>
        </HashRouter>
      </div>
  );
};

export default HwHeader;

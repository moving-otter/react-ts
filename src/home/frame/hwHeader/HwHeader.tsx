import React from 'react';
import './HwHeader.scss';
import {HashRouter, NavLink} from 'react-router-dom';

const HwHeader: React.FC = () => {
  return (
      <div className="hwHeader">
        <div className="content">
          <HashRouter>
            <NavLink exact to="/">React.tsx Project</NavLink>
          </HashRouter>
        </div>
      </div>
  );
};

export default HwHeader;

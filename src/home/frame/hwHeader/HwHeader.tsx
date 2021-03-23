import React from 'react';
import './HwHeader.scoped.scss';
import {HashRouter, NavLink} from 'react-router-dom';

const HwHeader: React.FC = () => {
  return (
      <div className="hwHeader">
        <div className="content">
          <HashRouter>
            <NavLink exact to="/">React-ts starter project</NavLink>
          </HashRouter>
        </div>
      </div>
  );
};

export default HwHeader;

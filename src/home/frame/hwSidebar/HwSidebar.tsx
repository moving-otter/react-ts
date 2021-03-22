import React from 'react';
import './HwSidebar.scss';
import {HashRouter, NavLink} from 'react-router-dom';

const HwSidebar: React.FC = () => {
  return (
      <HashRouter>
        <div className="hwSidebar">
          <div className="content">
            <div><NavLink to="/">Welcome</NavLink></div>
            <div><NavLink to="/exProps">Props</NavLink></div>
            <div><NavLink to="/exRedux">Redux</NavLink></div>
          </div>
        </div>
      </HashRouter>
  );
};

export default HwSidebar;

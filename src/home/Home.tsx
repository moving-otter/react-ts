import React from 'react';
import './Home.scoped.scss';
import {
  HwHeader,
  HwSidebar,
  HwSearch,
  HwFooter,
  HwRouter,
  HwMenu,
} from './frame/Frame';

const Home: React.FC = () => {

  return (
      <div className="home">
        <HwHeader/>

        <div className="depth-1">
          <HwSearch/>

          <div className="depth-2">
            <HwSidebar/>

            <div className="depth-3">
              <HwMenu/>

              <HwRouter/>
            </div>
          </div>

          <div className="right">
            .
          </div>
        </div>

        <HwFooter/>
      </div>
  );
};

export default Home;


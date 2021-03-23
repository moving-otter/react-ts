import React from 'react';
import './Home.scss';
import {Welcome, ExState, ExProps, ExRedux} from './pages/Pages';
import {HwFooter, HwHeader, HwMenu} from './frame/Frame';
import {HashRouter, Route} from 'react-router-dom';

const Home: React.FC = () => {
  return (
      <div className="home">
        <HwHeader/>

        <HwMenu/>

        <div className="router">
          <HashRouter>
            <Route exact path="/" component={Welcome}/>
            <Route path="/exState" component={ExState}/>
            <Route path="/exProps" component={ExProps}/>
            <Route path="/exRedux" component={ExRedux}/>
          </HashRouter>
        </div>

        <HwFooter/>
      </div>
  );
};

export default Home;


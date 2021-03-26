import React from 'react';
import './Home.scoped.scss';
import {HashRouter, Route} from 'react-router-dom';
import {HwFooter, HwHeader, HwMenu} from './frame/Frame';
import {
  Welcome,
  ExState,
  ExProps,
  ExTodoList,
  ExRedux,
  ExCart,
  ExLifeCycle,
  ExBasicSyntax,
} from './pages/Pages';

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
            <Route path="/exBasicSyntax" component={ExBasicSyntax}/>
            <Route path="/exLifeCycle" component={ExLifeCycle}/>
            <Route path="/exTodoList" component={ExTodoList}/>
            <Route path="/exRedux" component={ExRedux}/>
            <Route path="/exCart" component={ExCart}/>
          </HashRouter>
        </div>

        <HwFooter/>
      </div>
  );
};

export default Home;


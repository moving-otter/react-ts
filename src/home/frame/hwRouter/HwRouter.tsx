import React from 'react';
import './HwRouter.scoped.scss';
import {HashRouter, Route} from 'react-router-dom';
import {
  ExBasicSyntax,
  ExCart,
  ExLifeCycle,
  ExProps,
  ExRedux,
  ExReduxCounter,
  ExReduxTodo,
  ExState,
  ExTodoList,
  ExVerneer,
  Welcome,
} from 'home/pages/react';

const HwRouter: React.FC = () => {
  return (
      <div className="hwRouter">
        <HashRouter>
          <Route exact path="/" component={Welcome}/>
          <Route path="/exState" component={ExState}/>
          <Route path="/exProps" component={ExProps}/>
          <Route path="/exBasicSyntax" component={ExBasicSyntax}/>
          <Route path="/exLifeCycle" component={ExLifeCycle}/>
          <Route path="/exVeneer" component={ExVerneer}/>
          <Route path="/exReduxTodo" component={ExReduxTodo}/>
          <Route path="/exTodoList" component={ExTodoList}/>
          <Route path="/exRedux" component={ExRedux}/>
          <Route path="/exCart" component={ExCart}/>
          <Route path="/exReduxCounter" component={ExReduxCounter}/>
        </HashRouter>
      </div>
  );
};

export default HwRouter;

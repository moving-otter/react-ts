import  React from 'react';
import './App.scss';
import ExRedux from './exRedux/ExRedux';
import ExProps from './exProps/ExProps';

const App: React.FC = () => {
  return (
      <div className="container">
        <ExRedux/>
        <ExProps/>
      </div>
  );
};

export default App;

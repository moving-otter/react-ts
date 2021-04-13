import React from 'react';
import './Welcome.scoped.scss';
import {Highlighter} from '@common/highlighter';
import {WelcomeCode} from '@common/code/react/WelcomeCode';

const Welcome: React.FC = () => {
  return (
      <div className="welcome">
        <div className="hwTitle">
          Hello hw-dev-store!
        </div>

        <Highlighter codeInfo={WelcomeCode}/>
      </div>
  );
};

export default Welcome;

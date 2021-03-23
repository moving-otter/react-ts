import React from 'react';
import './Welcome.scoped.scss';
import bonoImg from 'assets/bono.jpg';

const Welcome: React.FC = () => {
  return (
      <div className="welcome">
        <img src={bonoImg} alt="bono img"/>

        <div className="content">
          <div className="title">
            혹시 <i>React</i> 들어보셨나요?
          </div>

          <div className="desc">
            예,, 저희가 많이 보죠
          </div>
          <br/><br/>

          <ul>
            <li>React is a JavaScript library created by Facebook</li>
            <li>React is a UI library</li>
            <li>React is a tool for building UI components</li>
          </ul>
        </div>
      </div>
  );
};

export default Welcome;

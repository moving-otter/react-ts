import React from 'react';
import './Welcome.scss';
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
            예 저희가 많이 보죠
          </div>
           <br/><br/>
        </div>
      </div>
  );
};

export default Welcome;

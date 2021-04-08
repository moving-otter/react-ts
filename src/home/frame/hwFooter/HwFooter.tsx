import React from 'react';
import './HwFooter.scoped.scss';
import contactIcon from '@assets/icon/contact-icon.png';
import developerIcon from '@assets/icon/developer-icon.png';

const HwFooter: React.FC = () => {
  const contactUrl = 'https://www.youtube.com/user/youhyunwoo/discussion';

  return (
      <div className="hwFooter hwUserSelectNone">
        <div>
          <img src={contactIcon} alt="contact icon"/>

          <a target="_blank" href={contactUrl}>
            현우u Youtube
          </a>
        </div>

        <div>
          <img src={developerIcon} alt="developer icon"/>

          <label>Hyun-woo Yoo</label>
        </div>
      </div>
  );
};

export default HwFooter;

import React from 'react';
import './HwSearch.scoped.scss';
import SearchIcon from '@assets/icon/search-icon.png';

const HwSearch: React.FC = () => {

  return (
      <div className="hwSearch">
        <label onClick={() => console.log('search')}>
          Search

          <img src={SearchIcon} alt="search icon"/>
        </label>
      </div>
  );
};

export default HwSearch;

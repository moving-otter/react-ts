import React from 'react';
import './HwSearch.scoped.scss';
import SearchIcon from '@assets/icon/search-icon.png';
import FolderIcon from '@assets/icon/folder-icon.png';
import {useDispatch} from 'react-redux';
import {toggleSidebar} from '@store/ui/UiAction';

const HwSearch: React.FC = () => {
  const dispatch = useDispatch();

  return (
      <div className="hwSearch hwUserSelectNone">
        <div className="project" onClick={() => dispatch(toggleSidebar())}>
          Project

          <img src={FolderIcon} alt="search icon"/>
        </div>

        <div onClick={() => console.log('search')}>
          Search

          <img src={SearchIcon} alt="search icon"/>
        </div>
      </div>
  );
};

export default HwSearch;

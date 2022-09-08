import React from 'react';
import './HwSearch.scoped.scss';
import SearchIcon from '@assets/icon/search-icon.png';
import FolderIcon from '@assets/icon/folder-icon.png';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {toggleSidebar} from '@store/ui/UiAction';

const HwSearch: React.FC = () => {
  const dispatch = useDispatch();
  const uiState = useSelector((state: RootStateOrAny) => state.UiReducer);

  const getBackGroundColor = {
    backgroundColor: (uiState.sidebar) ? 'rgb(45, 47, 48)' : ''
  };

  return (
      <div className="hwSearch hwUserSelectNone">
        <div
            className="project"
            onClick={() => dispatch(toggleSidebar())}
            style={getBackGroundColor}
        >
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

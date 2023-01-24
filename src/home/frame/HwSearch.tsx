import styled from 'styled-components';
import React from 'react';
import SearchIcon from 'src/assets/icon/search-icon.png';
import FolderIcon from 'src/assets/icon/folder-icon.png';
import { useDispatch } from 'react-redux';
import { useStoreState } from 'src/store/useStoreState';
import { toggleSearchModal, toggleSidebar } from 'src/store/ui/UiAction';
import { SearchModalContainer } from 'src/common/modal/SearchModalContainer';

export const HwSearch = () => {
  const dispatch = useDispatch();
  const { uiState } = useStoreState();

  const getBackGroundColor = {
    backgroundColor: uiState.sidebar ? 'rgb(45, 47, 48)' : '',
  };

  return (
    <Wrapper className="hwUserSelectNone">
      <Project onClick={() => dispatch(toggleSidebar())} style={getBackGroundColor}>
        Project
        <ImgArea src={FolderIcon} alt="search icon" />
      </Project>

      {uiState.searchModal && <SearchModalContainer />}
      <Search onClick={() => dispatch(toggleSearchModal())}>
        Search
        <ImgArea src={SearchIcon} alt="search icon" />
      </Search>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 25px;
  position: absolute;
`;

const Content = styled.div`
  position: absolute;
  padding-left: 40px;
  padding-right: 15px;
  transform: rotate(270deg);
  font-size: 14px;
  color: rgb(210, 210, 210);
  height: 23px;
  background-color: #444;

  &:hover {
    background-color: rgb(53, 55, 57);
  }

  &:active {
    background-color: rgb(45, 47, 48);
  }
`;

const Project = styled(Content)`
  top: 39px;
`;

const Search = styled(Content)`
  top: 128px;
`;

const ImgArea = styled.img`
  position: absolute;
  width: 17px;
  height: 17px;
  right: 65px;
  top: 3px;
  transform: rotate(90deg);
  filter: invert(0.7);
`;

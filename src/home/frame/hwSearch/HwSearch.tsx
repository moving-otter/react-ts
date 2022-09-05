import styled from 'styled-components'
import React from 'react';
import './HwSearch.scoped.scss';
import SearchIcon from '@assets/icon/search-icon.png';
import FolderIcon from '@assets/icon/folder-icon.png';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {toggleSidebar} from '@store/ui/UiAction';

export const HwSearch = () => {
  const dispatch = useDispatch();
  const uiState = useSelector((state: RootStateOrAny) => state.UiReducer);

  const getBackGroundColor = {
    backgroundColor: (uiState.sidebar) ? 'rgb(45, 47, 48)' : ''
  };

  return (
      <Wrapper className="hwUserSelectNone">
        <ProjectArea
          onClick={() => dispatch(toggleSidebar())}
          style={getBackGroundColor}
        >
          Project

          <ImageArea src={FolderIcon} alt="search icon"/>
        </ProjectArea>

        <SearchArea onClick={() => console.log('search')}>
          Search

          <ImageArea src={SearchIcon} alt="search icon"/>
        </SearchArea>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 25px;
  position: absolute;
`;

const ProjectArea = styled.div`
  background-color: #444;
  top: 39px;

  position: absolute;
  padding-left: 40px;
  padding-right: 15px;
  transform: rotate(270deg);
  font-size: 14px;
  color: rgb(210, 210, 210);
  height: 23px;

  &:hover {
    background-color: rgb(53, 55, 57);
  }

  &:active {
    background-color: rgb(45, 47, 48);
  }
`;

const SearchArea = styled.div`
  position: absolute;
  padding-left: 40px;
  padding-right: 15px;
  transform: rotate(270deg);
  top: 128px;
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

const ImageArea = styled.img`
  position: absolute;
  width: 17px;
  height: 17px;
  right: 65px;
  top: 3px;
  transform: rotate(90deg);
  filter: invert(0.7);
`;

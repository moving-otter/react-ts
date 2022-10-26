import styled from 'styled-components'
import React from 'react'
import {useStoreState} from '@store/useStoreState'
import {toggleSearchModal} from '@store/ui/UiAction';
import { useDispatch } from 'react-redux';
import {SearchBox} from './SearchBox'
import {SearchedList} from './SearchedList'
import {SelectedContent} from './SelectedContent'

export const SearchModal = () => {
    const dispatch = useDispatch();
    const {uiState} = useStoreState();

    return (
        <Wrapper>
            <DialogBox>
              <SearchBox />
              <SearchedList />
              <SelectedContent />
            </DialogBox>
            <Backdrop 
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();

                    if (uiState.searchModal) {
                        dispatch(toggleSearchModal())
                    }
                }}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  z-index: 200;
`;

const DialogBox = styled.dialog`
  width: 800px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: #3b3b3b;
  z-index: 10000;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
`;
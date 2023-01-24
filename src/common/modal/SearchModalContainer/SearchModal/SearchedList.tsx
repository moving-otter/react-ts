import styled from 'styled-components';
import React from 'react';

export const SearchedList = () => {
  const searchedList = [
    'const dispatch = useDispatch();',
    'const {uiState} = useStoreState();',
    'export const toggleSidebar = () => {',
    'const initialState = {',
    'const UiReducer = (state = initialState, action) => {',
    'const categories = [',
    'const Wrapper = styled.div`',
    'export const Component = () => {...}',
    'export const Component = (props: {',
    'const addItem = (text) => {',
  ];

  return (
    <Wrapper>
      <ListArea>
        <ul>
          {searchedList.map((searchedItem) => (
            <li key={searchedItem}>{searchedItem}</li>
          ))}
        </ul>
      </ListArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 40%;
`;

const ListArea = styled.div`
  height: 90%;
  background: #5c5c5c;
  overflow-y: auto;

  ul li {
    padding: 0.3vw;
    border-bottom: solid 1px #878787;
  }
`;

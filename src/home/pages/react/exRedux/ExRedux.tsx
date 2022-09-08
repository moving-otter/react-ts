import styled from 'styled-components'
import React from 'react';
import {ItemList} from "./ItemList/ItemList";
import {useDispatch} from "react-redux";
import {addCart} from "@store/cart/CartAction";
import {itemList} from "./Item";

export const ExRedux = () => {
  const dispatch = useDispatch(); // ready

  return (
      <Wrapper>
        <ItemList
            itemList={itemList}
            addFunc={(_item) => dispatch(addCart(_item))} // use
        />
      </Wrapper>
  );
};

const Wrapper = styled.div`
  height : 100%;
  minHeight: 605px;
`;
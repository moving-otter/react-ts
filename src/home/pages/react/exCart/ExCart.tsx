import styled from 'styled-components'
import React from "react";
import ItemList from "./ItemList";
import {deleteCart} from "@store/cart/CartAction";
import {useDispatch} from "react-redux";
import {useStoreState} from '@store/useStoreState'

export const ExCart = () => {
  const dispatch = useDispatch();
  const {cartState} = useStoreState()

  let dom;

  if (cartState.length >= 1) {
    dom = cartState.map((item) => {
      return <ItemList
          key={item.name}
          item={item}
          deleteFunc={(item) => dispatch(deleteCart(item))}
      />
    })
  } else {
    dom = <div className="emptyCart">장바구니가 비어 있습니다</div>;
  }

  return (
      <Wrapper>
        <h2 className="hwTitle">장바구니 - {cartState.length}</h2>
        <Content>
          {dom}
        </Content>
      </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const Content = styled.div`
  display: inline-grid
`;

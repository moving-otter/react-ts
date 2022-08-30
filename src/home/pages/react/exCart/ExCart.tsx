import React from "react";
import ItemList from "./ItemList/ItemList";
import {deleteCart} from "@store/cart/CartAction";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-grid
`;

const ExCart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state: RootStateOrAny) => state.CartReducer);

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
      <div className="exCart">
        <h2 className="hwTitle">장바구니 - {cartState.length}</h2>
        <Wrapper>
          {dom}
        </Wrapper>
      </div>
  );
};

export default ExCart;

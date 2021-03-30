import React from "react";
import ItemList from "./ItemList/ItemList";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {deleteCart} from "../../../store/actions";

const wrapperStyle = {
  display: 'inline-grid'
};

const ExCart = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state: RootStateOrAny) => state.cartReducer);

  const dom = reducer.length >= 1 ? reducer.map((item) => {
    return <ItemList key={item.name} item={item} deleteFunc={(item) => dispatch(deleteCart(item))}/>
  }) : <div className="emptyCart">장바구니가 비어 있습니다</div>;

  return (
      <div className="exCart">
        <h2 className="title">장바구니</h2>
        <div className="wrapper" style={wrapperStyle}>
          {dom}
        </div>
      </div>
  );
};

export default ExCart;

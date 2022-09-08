import React from 'react';
import ItemList from "./ItemList/ItemList";
import {useDispatch} from "react-redux";
import {addCart} from "@store/cart/CartAction";
import {itemList} from "./Item";

const frameStyle = {
  height : '100%',
  minHeight: '605px'
};

const ExRedux = () => {
  const dispatch = useDispatch(); // ready

  return (
      <div className="exRedux" style={frameStyle}>
        <ItemList
            itemList={itemList}
            addFunc={(_item) => dispatch(addCart(_item))} // use
        />
      </div>
  );
};

export default ExRedux;

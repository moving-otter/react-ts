import React from 'react';
import ItemList from "./ItemList/ItemList";
import {useDispatch} from "react-redux";
import {addCart} from "store/actions";
import hitchhiker from "assets/hitchhiker.jpg";
import redblack from "assets/redblack.jpg";

const itemList = [{
  url: hitchhiker,
  name: '은하수를 여행하는 히치하이커를 위한 안내서',
  price: '12000'
}, {
  url: redblack,
  name: '적과 흑',
  price: '14000'
}];

const ExRedux = () => {
  const dispatch = useDispatch(); // ready

  return (
      <div className="exRedux">
        <ItemList
            itemList={itemList}
            addFunc={(_item) => dispatch(addCart(_item))} // use
        />
      </div>
  );
};

export default ExRedux;

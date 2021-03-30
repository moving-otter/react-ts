import React from 'react';
import './ItemList.scoped.scss';

type ItemObj = { url: string, name: string, price: string };

type props = {
  itemList: Array<ItemObj>,
  addFunc: (item) => void
}

const ItemList: React.FC<props> = ({itemList, addFunc}) => {

  return (
      <ul className="itemList">
        {itemList.map((item) =>
            <div className="item" key={item.name}>
              <img className="img" src={item.url}/>
              <div className="name">{item.name}</div>
              <div className="price">{item.price}</div>
              <button className="addCartButton" onClick={() => addFunc(item)}>장바구니 담기
              </button>
            </div>
        )}
      </ul>
  );
};

export default ItemList;
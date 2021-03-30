import React from "react";
import "./ItemList.scoped.scss";

type ItemObj = { url: string, name: string, price: string, alt: string };

type props = {
  item: ItemObj,
  deleteFunc: (item) => void
}

const ItemList: React.FC<props> = ({item, deleteFunc}) => {

  return (
      <div className="item" key={item.name}>
        <img className="img" src={item.url} alt={item.alt}/>
        <div className="name">{item.name}</div>
        <div className="price">{item.price}</div>
        <button className="deleteItemButton" onClick={() => deleteFunc(item)}>삭제
        </button>
      </div>
  );
};

export default ItemList;

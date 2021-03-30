import React from "react";

type ItemObj = { url: string, name: string, price: string };

type props = {
  item: ItemObj,
  deleteFunc: (item) => void
}

const ItemList: React.FC<props> = ({item, deleteFunc}) => {

  return (
      <div className="item" key={item.name}>
        <img className="img" src={item.url}/>
        <div className="name">{item.name}</div>
        <div className="price">{item.price}</div>
        <button className="deleteItemButton" onClick={() => deleteFunc(item)}>Delete
        </button>
      </div>
  );
};

export default ItemList;
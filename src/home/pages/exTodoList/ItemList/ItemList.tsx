import React from 'react';
import './ItemList.scoped.scss';

type ItemObj = { key: number, text: string };

type props = {
  entries: Array<ItemObj>,
  deleteItemFunc: (_key) => void
}

const ItemList: React.FC<props> = ({entries, deleteItemFunc}) => {

  return (
      <ul className="itemList">
        {entries.map((e) =>
          <div key={e.key} className="item">
            <li>{e.text}</li>
            <button onClick={() => deleteItemFunc(e.key)}>x</button>
          </div>
        )}
      </ul>
  );
};

export default ItemList;

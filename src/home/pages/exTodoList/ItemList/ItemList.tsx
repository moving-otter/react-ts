import React from 'react';
import './ItemList.scoped.scss';

type ItemObj = { key: number, text: string };
interface props {
  entries: Array<ItemObj>,
  propsFunction: (_key) => void
}

const ItemList: React.FC<props> = ({entries, propsFunction}) => {

  return (
      <ul className="itemList">
        {entries.map((e) =>
            <div key={e.key} className="item">
              <li>{e.text}</li>
              <button onClick={() => propsFunction(e.key)}>x</button>
            </div>
        )}
      </ul>
  );
};

export default ItemList;

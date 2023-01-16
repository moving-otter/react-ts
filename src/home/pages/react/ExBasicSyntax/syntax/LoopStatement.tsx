import styled from "styled-components";
import React, { useState, useEffect } from "react";

type ItemObj = {
  key: number;
  item: string;
};

export const LoopStatement = () => {
  const [list, setList] = useState<Array<ItemObj>>([
    { key: Date.now(), item: "Item 1" }
  ]);

  useEffect(() => {
    const newItemObj: ItemObj = {
      key: Date.now(),
      item: "Item"
    };

    setList([...list, newItemObj]);
  }, []); // list를 감지할 경우 무한루프 현상 일어남.

  return (
    <Wrapper>
      <Content>
        <Title className="hwTitle">Loop statement</Title>
        <ul>
          {list.map(e => (
            <li key={e.key}>{e.item}</li>
          ))}
        </ul>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div``;

const Title = styled.div``;

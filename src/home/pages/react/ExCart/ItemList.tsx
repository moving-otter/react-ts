import styled from 'styled-components'
import React from "react";

type ItemObj = { url: string, name: string, price: string, alt: string };

export const ItemList = (props: {
  item: ItemObj,
  deleteFunc: (item) => void
}) => {

  return (
      <Wrapper key={props.item.name}>
        <ImgArea src={props.item.url} alt={props.item.alt}/>
        <NameArea>{props.item.name}</NameArea>
        <PriceArea>{props.item.price}</PriceArea>
        <DeleteItemButton onClick={() => props.deleteFunc(props.item)}>삭제</DeleteItemButton>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid gray;
  height: 100px;
  display: inline-flex;
  margin-bottom: 1px;
`;

const ImgArea = styled.img`
  width: 73px;
  height: 100px;
`;

const NameArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 200px;
  min-width: 200px;
  margin-left: 20px;
  font-size: 16px;
`;

const PriceArea = styled.div`
  margin-top: 35px;
  margin-left: 20px;
`;

const DeleteItemButton = styled.button`
  margin-left: 20px;
`;

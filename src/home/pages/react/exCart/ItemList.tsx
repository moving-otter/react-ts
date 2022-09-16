import styled from 'styled-components'
import React from "react";

type ItemObj = { url: string, name: string, price: string, alt: string };

type props = {
  item: ItemObj,
  deleteFunc: (item) => void
}

const ItemList: React.FC<props> = ({item, deleteFunc}) => {

  return (
      <Wrapper key={item.name}>
        <ImgArea src={item.url} alt={item.alt}/>
        <NameArea>{item.name}</NameArea>
        <PriceArea>{item.price}</PriceArea>
        <DeleteItemButton onClick={() => deleteFunc(item)}>삭제</DeleteItemButton>
      </Wrapper>
  );
};

export default ItemList;

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

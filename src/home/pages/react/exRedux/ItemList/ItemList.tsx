import styled from 'styled-components'
import React from 'react';

type ItemObj = { url: string, name: string, price: string };

export const ItemList = (props: {
  itemList: Array<ItemObj>;
  addFunc: (item) => void;
}) => {

  return (
      <Wrapper>
        {props.itemList.map((item) =>
            <Item key={item.name}>
              <ImgArea src={item.url} alt={item.name}/>
              <NameArea>{item.name}</NameArea>
              <PriceArea>{item.price}</PriceArea>
              <AddCartButton onClick={() => props.addFunc(item)}>
                장바구니 담기
              </AddCartButton>
            </Item>
        )}
      </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Item = styled.div`
  width: 200px;
  height: 400px;
  margin-top: 100px;
  margin-right: 100px;
`;

const ImgArea = styled.img`
  width: 200px;
  height: 200px;
`;

const NameArea = styled.div`
  height: 90px;
  text-align: center;
`;

const PriceArea = styled.div`
  text-align: center;
`;

const AddCartButton = styled.button`
  margin-top: 25px;
  margin-left: 50px;
`

import styled from 'styled-components';

export const Counter = (props: {
  countValue: number;
  decreaseCount: () => void;
  increaseCount: () => void;
}) => {
  return (
    <Wrapper>
      <Button onClick={props.decreaseCount}>-</Button>

      <span>{props.countValue}</span>

      <Button onClick={props.increaseCount}>+</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  margin: 100px;
  padding: 10px;
  border-radius: 3px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
`;

const Button = styled.button`
  width: 50px;
  background-color: transparent;
  border: none;
  font-size: 30px;
  font-weight: bold;
  border-radius: 3px;
  transition: all 0.15s ease-in;

  &:hover:nth-child(1) {
    background-color: #f45b69;
  }
  &:hover:nth-child(3) {
    background-color: #c0dfa1;
  }
`;

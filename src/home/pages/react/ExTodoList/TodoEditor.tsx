import styled from "styled-components";
import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useState
} from "react";

export const TodoEditor = (props: {
  addItemFunc: (text) => void;
  resetListFunc: () => void;
}) => {
  const [inputText, setInputText] = useState<string>("");

  const handleText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);
  const handleEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
        props.addItemFunc(inputText);
        setInputText("");
      }
    },
    [props.addItemFunc, inputText]
  );

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Enter task"
        onChange={handleText}
        onKeyDown={handleEnter}
        value={inputText}
      />
      <Button
        onClick={() => {
          props.addItemFunc(inputText);
          setInputText("");
        }}
      >
        add
      </Button>

      <Button onClick={() => props.resetListFunc()}>reset</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Input = styled.input`
  padding-left: 5px;
  font-size: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  font-size: 20px;
`;

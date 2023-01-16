import styled from "styled-components";

export const SearchBox = () => {
  return (
    <Wrapper>
      <FindInFilesArea>
        <p>
          Find <small>10 matches</small>
        </p>
      </FindInFilesArea>
      <InputArea>
        <Input />
      </InputArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
`;

const FindInFilesArea = styled.div``;

const InputArea = styled.div``;

const Input = styled.input`
  width: 100%;
`;

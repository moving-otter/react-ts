import styled from 'styled-components'
import React, {useState, useEffect} from 'react';
import 'highlight.js/scss/androidstudio.scss';
import hljs from 'highlight.js/lib';

export const Highlighter = (props: {
  codeInfo: {
    // typescript, css
    type: string;
    desc: string;
    code: string;
  };
}) => {
  const [numList, setNumList] = useState<Array<number>>([]);

  useEffect(() => {
    hljs.highlightAll();

    const setNumListFunc = () => {
      const str = props.codeInfo.code;
      const len = str.split(/\r\n|\r|\n/).length;
      const newNumList = Array.from(Array(len).keys());
  
      setNumList(newNumList);
    }

    setNumListFunc();
  }, [props.codeInfo.code])

  return (
    <Wrapper>
      <TitleArea className="hwUserSelectNone">
        {props.codeInfo.desc}
      </TitleArea>

      <Content>
        <LineNumber className="hwUserSelectNone">
          {numList.map(num =>
            <Num key={num} tabIndex={1}>
              {num + 1}
            </Num>
          )}
        </LineNumber>

        <CustomCode className={`${props.codeInfo.type}`}>
          {props.codeInfo.code}
        </CustomCode>
      </Content>

      <BottomLine/>
    </Wrapper>
  )
}

const Wrapper = styled.pre`
  position: relative;
  padding: 20px 0;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  top: 0;
  left: 5px;
  background-color: #3b3b3b;
  padding: 5px 30px;
  margin-left: -30px;
  font-family: auto !important;

  img {
    width: 22px;
    height: 22px;
    filter: invert(0.7);
    margin-right: 8px;
  }
`;

const Content = styled.div`
  display: flex;
  line-height: 21px;
`;

const LineNumber = styled.div`
  background-color: rgb(49, 51, 53);
  color: rgb(96, 99, 102);
  margin-left: -30px;
  padding: 20px 0 40px 0;
  margin-right: 30px;
`;

const Num = styled.div`
  padding: 0 22px 0 10px;

  &:hover {
    background-color: #3e3e3e;
  }

  &:focus {
    color: black;
    background-color: silver;
  }
`;

const CustomCode = styled.code`
  background: none;
  padding: 20px 0 40px 0;
`;

const BottomLine = styled.div`
  border-bottom: 5px solid #313335;
  margin: 0 -28px;
  margin-top: -5px;
`;
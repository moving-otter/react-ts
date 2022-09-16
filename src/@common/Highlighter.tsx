import styled from 'styled-components'
import React, {Component} from 'react';
import 'highlight.js/scss/androidstudio.scss';
import hljs from 'highlight.js/lib';

type props = {
  codeInfo: {
    // typescript, css
    type: string;
    desc: string;
    code: string;
  };
};

type state = {
  flag: boolean;
  numList: Array<number>;
};

class Highlighter extends Component<props, state> {
  constructor(props: props) {
    super(props);

    this.state = {
      flag: false,
      numList: []
    };
  }

  componentDidMount() {
    hljs.highlightAll();

    this.setNumList();
  }

  setNumList() {
    const str = this.props.codeInfo.code;
    const len = str.split(/\r\n|\r|\n/).length;
    const newNumList = Array.from(Array(len).keys());

    this.setState({numList: newNumList});
  }

  render() {
    return (
        <Wrapper>
          <TitleArea className="hwUserSelectNone">
            {this.props.codeInfo.desc}
          </TitleArea>

          <Content>
            <LineNumber className="hwUserSelectNone">
              {this.state.numList.map(num =>
                <Num key={num} tabIndex={1}>
                  {num + 1}
                </Num>
              )}
            </LineNumber>

            <CustomCode className={`${this.props.codeInfo.type}`}>
              {this.props.codeInfo.code}
            </CustomCode>
          </Content>

          <BottomLine/>
        </Wrapper>
    );
  }
}

export default Highlighter;

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
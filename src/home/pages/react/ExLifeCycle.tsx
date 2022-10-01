import styled from 'styled-components'
import React, {Component} from 'react';
import {Highlighter} from '@common/Highlighter';
import {ExLifeCycleCode} from '@common/code/react/ExLifeCycleCode';

type props = {};

type state = {
  msg: string;
  count: number;
};

class ExLifeCycle extends Component<props, state> {
  constructor(props: props) {
    super(props);

    this.state = {
      msg: '',
      count: 0,
    };

    // register methods here
    this.plusCount = this.plusCount.bind(this);
  }

  componentDidMount() {
    console.log('did mount / [vue] mounted');

    this.setState({msg: 'Default Title'});
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('should update?');

    return true;
  }

  componentDidUpdate() {
    console.log('did update / [vue] updated');
  }

  componentWillUnmount() {
    console.log('will unmount / [vue] destroyed');
  }

  plusCount() {
    this.setState({
      count: this.state.count + 1
    });

    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
        <Wrapper>
          <Title className="hwTitle hwBlueMarker">React Life Cycle - class</Title>

          <Content>
            <Counter>
              {this.state.count}

              <button onClick={this.plusCount}>Plus</button>

              {this.state.msg}
            </Counter>

            <Desc>
              컴포넌트 생명주기 순서
              <ul>
                <li>componentDidMount : 컴포넌트 생성</li>
                <li>shouldComponentUpdate</li>
                <li>componentDidUpdate</li>
                <li>componentWillUnmount : 컴포넌트 제거</li>
              </ul>
            </Desc>
          </Content>

          <Highlighter codeInfo={ExLifeCycleCode}/>
        </Wrapper>
    )
  }
}

export default ExLifeCycle;

const Wrapper = styled.div`
`;

const Title = styled.div`
`;

const Content = styled.div`
  padding-left: 20px;
`;

const Counter = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Desc = styled.div`
  margin-top: 40px;

  ul {
    li {
      margin-top: 20px;
    }
  }
`;

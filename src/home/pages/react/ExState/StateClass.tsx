import styled from 'styled-components'
import React, {Component} from 'react';

type props = {};

type state = {
  count: number;
}

class StateClass extends Component<props, state> {
  constructor(props: props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.updateCount = this.updateCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  updateCount(flag) {
    if (flag === '+') {
      this.setState({count: this.state.count + 1});
    } else if (flag === '-') {
      this.setState({count: this.state.count - 1});
    }
  }

  resetCount() {
    this.setState({count: 0});
  }

  render() {
    return (
        <Wrapper>
          <Title className="hwTitle hwBlueMarker">Counter - class</Title>

          <Content>
            <button onClick={() => this.updateCount('-')}>Minus</button>

            <b>{this.state.count}</b>

            <button onClick={() => this.updateCount('+')}>Plus</button>

            <button onClick={this.resetCount}>Reset</button>
          </Content>
        </Wrapper>
    );
  };
}

export default StateClass;

const Wrapper = styled.div`
`;

const Title = styled.div`
`;

const Content = styled.div`
  padding-left: 10px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
`;
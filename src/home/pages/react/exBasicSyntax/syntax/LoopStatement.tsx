import styled from 'styled-components'
import React, {Component} from 'react';

type props = {};

type ItemObj = {
  key: number;
  item: string;
};

type state = {
  list: Array<ItemObj>;
};

class LoopStatement extends Component<props, state> {
  constructor(props: props) {
    super(props);

    this.state = {
      list: [
        {key: Date.now(), item: 'Item 1'},
      ]
    };
  }

  componentDidMount() {
    const newItemObj: ItemObj = {
      key: Date.now(),
      item: 'Item'
    };

    this.setState({
      list: [...this.state.list, newItemObj]
    })
  }

  render() {
    return (
        <Wrapper>
          <Content>
            <Title className="hwTitle">Loop statement</Title>
            <ul>
              {this.state.list.map(e =>
                  <li key={e.key}>{e.item}</li>
              )}
            </ul>
          </Content>
        </Wrapper>
    );
  };
}

export default LoopStatement;

const Wrapper = styled.div`
`;

const Content = styled.div`
`;

const Title = styled.div`
`;

import styled from 'styled-components'
import React, {Component} from 'react';

type props = {};

type state = {
  flag: boolean;
};

class StyleClassBinding extends Component<props, state> {
  constructor(props: props) {
    super(props);

    this.state = {
      flag: false
    };

    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler() {
    this.setState({
      flag: !(this.state.flag)
    });
  }

  render() {
    return (
        <Wrapper>
          <Content>
            <Title className="hwTitle">Style & Class binding</Title>

            <button onClick={this.toggleHandler}>Toggle</button>

            <RenderArea flag={this.state.flag}>Sample Message Sample Message</RenderArea>
            {this.state.flag && (<div>Sample Message Sample Message</div>)}
          </Content>
        </Wrapper>
    );
  };
}

export default StyleClassBinding;

const Wrapper = styled.div`
  minHeight: 150px;
  fontSize: 24px;
`;

const Content = styled.div`
`;

const Title = styled.div`
`;

const RenderArea = styled.div`
  display: ${props => (props.flag ? 'block' : 'none')};
`;

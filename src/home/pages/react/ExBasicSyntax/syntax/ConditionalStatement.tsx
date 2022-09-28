import styled from 'styled-components'
import React, {Component} from 'react';

type props = {};

type state = {
  flag: boolean;
};

class ConditionalStatement extends Component<props, state> {
  constructor(props: props) {
    super(props);

    this.state = {
      flag: false
    };
  }

  render() {
    let content;
    if (this.state.flag) {
      content = <div>true</div>;
    } else {
      // <> => <React.Fragment>
      content =
          <>
            <div>false</div>
            <div>false</div>
          </>
    }

    return (
        <Wrapper>
          <Content>
            <Title className="hwTitle">Conditional statement</Title>
            {content}

            {(this.state.flag) ?
                <div>true</div>
                :
                <>
                  <div>false</div>
                  <div>false</div>
                </>
            }
          </Content>
        </Wrapper>
    );
  };
}

export default ConditionalStatement;

const Wrapper = styled.div`
`;

const Content = styled.div`
`;

const Title = styled.div`
`;

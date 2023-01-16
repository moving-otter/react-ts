import styled from "styled-components";
import React, { Component } from "react";

type props = {
  name: string;
  age?: number;
};

type state = {
  title: string;
};

class DynamicPropsClass extends Component<props, state> {
  static defaultProps = {
    age: 10
  };

  constructor(props: props) {
    super(props);

    this.state = {
      title: "Origin Title"
    };

    this.handleTitle = this.handleTitle.bind(this);
  }

  handleTitle() {
    if (this.state.title === "Origin Title") {
      this.setState({ title: "Title Origin" });
    } else {
      this.setState({ title: "Origin Title" });
    }
  }

  render() {
    return (
      <Wrapper>
        <TextContent className="hwBlueMarker">
          {this.state.title} - class
        </TextContent>
        <TextContent>{this.props.name}</TextContent>
        <TextContent>{this.props.age}</TextContent>
        <button onClick={this.handleTitle}>Change</button>
      </Wrapper>
    );
  }
}

export default DynamicPropsClass;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  padding: 20px 0;
`;

const TextContent = styled.div`
  width: 100%;
  text-align: center;
`;

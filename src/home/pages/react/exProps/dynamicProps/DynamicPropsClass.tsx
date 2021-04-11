import React, {Component} from 'react';
import './DynamicProps.scoped.scss';

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
      title: 'Origin Title'
    };

    this.handleTitle = this.handleTitle.bind(this);
  }

  handleTitle() {
    if (this.state.title === 'Origin Title') {
      this.setState({title: 'Title Origin'});
    } else {
      this.setState({title: 'Origin Title'});
    }
  }

  render() {
    return (
        <div className="dynamicProps">
          <div className="hwBlueMarker">{`${this.state.title} - class`}</div>
          <div>{this.props.name}</div>
          <div>{this.props.age}</div>
          <button onClick={this.handleTitle}>Change</button>
        </div>
    );
  };
}

export default DynamicPropsClass;

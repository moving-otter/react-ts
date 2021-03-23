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
    const rootStyle = {
      height: '100px',
      fontSize: '24px',
    };
    const render = {
      display: (this.state.flag) ? 'block' : 'none'
    };
    const renderClass = (this.state.flag) ? 'show' : 'hide';

    return (
        <div style={rootStyle}>
          <div className="hwTitle">Style & Class binding</div>

          <button onClick={this.toggleHandler}>Toggle</button>

          <div style={render}>Sample Message Sample Message</div>
          <div className={renderClass}>Sample Message Sample Message</div>
        </div>
    );
  };
}

export default StyleClassBinding;

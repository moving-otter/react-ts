import React, {Component} from 'react';
import './ExState.scoped.scss';

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
        <div className="state">
          <div className="hwTitle hwBlueMarker">Counter - class</div>

          <div className="content">
            <button onClick={() => this.updateCount('-')}>Minus</button>

            <b>{this.state.count}</b>

            <button onClick={() => this.updateCount('+')}>Plus</button>

            <button onClick={this.resetCount}>Reset</button>
          </div>
        </div>
    );
  };
}

export default StateClass;

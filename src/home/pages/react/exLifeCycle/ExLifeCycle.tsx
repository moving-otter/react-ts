import React, {Component} from 'react';
import './ExLifeCycle.scoped.scss';
import {Highlighter} from '@common/highlighter';
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
        <div className="exLifeCycle">
          <div className="hwTitle hwBlueMarker">React Life Cycle - class</div>

          <div className="content">
            <div className="counter">
              {this.state.count}

              <button onClick={this.plusCount}>Plus</button>

              {this.state.msg}
            </div>

            <div className="desc">
              컴포넌트 생명주기 순서
              <ul>
                <li>componentDidMount : 컴포넌트 생성</li>
                <li>shouldComponentUpdate</li>
                <li>componentDidUpdate</li>
                <li>componentWillUnmount : 컴포넌트 제거</li>
              </ul>
            </div>
          </div>

          <Highlighter codeInfo={ExLifeCycleCode}/>
        </div>
    )
  }
}

export default ExLifeCycle;

import React, {Component} from 'react';
import './Highlighter.scoped.scss';
import 'highlight.js/scss/androidstudio.scss';
import hljs from 'highlight.js/lib';

type props = {
  children: string;
  desc?: string;
};

type state = {

};

class Highlighter extends Component<props, state> {
  static defaultProps = {
    desc: ''
  };

  componentDidMount() {
    hljs.highlightAll();
  }

  render() {
    return (
        <pre className="highlighter">
          <div className="titleArea hwUserSelectNone">
            {this.props.desc}
          </div>

          <code className="customCode">
            {this.props.children}
          </code>

          <div className="bottomLine"></div>
        </pre>
    );
  }
}

export default Highlighter;

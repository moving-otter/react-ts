import React, {Component} from 'react';
import './Highlighter.scoped.scss';
import 'highlight.js/scss/androidstudio.scss';
import hljs from 'highlight.js/lib';

type props = {
  codeInfo: {
    // typescript, css
    type: string;
    desc: string;
    code: string;
  };
};

type state = {
  flag: boolean;
};

class Highlighter extends Component<props, state> {
  constructor(props: props) {
    super(props);

    this.state = {
      flag: false
    };
  }

  componentDidMount() {
    hljs.highlightAll();
  }

  render() {
    return (
        <pre className="highlighter">
          <div className="titleArea hwUserSelectNone">
            {this.props.codeInfo.desc}
          </div>

          <code className={`${this.props.codeInfo.type} customCode`}>
            {this.props.codeInfo.code}
          </code>

          <div className="bottomLine"/>
        </pre>
    );
  }
}

export default Highlighter;

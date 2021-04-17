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
  numList: Array<number>;
};

class Highlighter extends Component<props, state> {
  constructor(props: props) {
    super(props);

    this.state = {
      flag: false,
      numList: []
    };
  }

  componentDidMount() {
    hljs.highlightAll();

    this.setNumList();
  }

  setNumList() {
    const str = this.props.codeInfo.code;
    const len = str.split(/\r\n|\r|\n/).length;
    const newNumList = Array.from(Array(len).keys());

    this.setState({numList: newNumList});
  }

  render() {
    return (
        <pre className="highlighter">
          <div className="titleArea hwUserSelectNone">
            {this.props.codeInfo.desc}
          </div>

          <div className="content">
            <div className="lineNumber hwUserSelectNone">
              {this.state.numList.map(num =>
                <div className="num" key={num} tabIndex={1}>
                  {num + 1}
                </div>
              )}
            </div>

            <code className={`${this.props.codeInfo.type} customCode`}>
            {this.props.codeInfo.code}
          </code>
          </div>

          <div className="bottomLine"/>
        </pre>
    );
  }
}

export default Highlighter;

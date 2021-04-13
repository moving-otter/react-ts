import React, {Component} from 'react';
import './Highlighter.scoped.scss';
import 'highlight.js/scss/androidstudio.scss';
import hljs from 'highlight.js/lib';

type props = {
  codeInfo: {
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
    // setTimeout(() => {
    //   this.setState({flag: true});
    //   hljs.highlightAll();
    // }, 100);
  }

  render() {
    // const renderClass = (this.state.flag) ? 'show' : 'hide';
    // const getStyle = {
    //   color: (this.state.flag) ? '' : '#2b2b2b'
    // };

    return (
        <pre className="highlighter">
          <div className="titleArea hwUserSelectNone">
            {this.props.codeInfo.desc}
          </div>

          <code className="customCode">
            {this.props.codeInfo.code}
          </code>

          <div className="bottomLine"/>
        </pre>
    );
  }
}

export default Highlighter;

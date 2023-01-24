const LoopStatementCode = {
  type: 'typescript',
  desc: 'LoopStatement.tsx',
  code: `import React, {Component} from 'react';

type props = {};

type ItemObj = {
  key: number;
  item: string;
};

type state = {
  list: Array<ItemObj>;
};

class LoopStatement extends Component<props, state> {
  constructor(props: props) {
    super(props);

    this.state = {
      list: [
        {key: Date.now(), item: 'Item 1'},
      ]
    };
  }

  componentDidMount() {
    const newItemObj: ItemObj = {
      key: Date.now(),
      item: 'Item'
    };

    this.setState({
      list: [...this.state.list, newItemObj]
    })
  }

  render() {
    return (
        <div>
          <div className="content">
            <div className="hwTitle">Loop statement</div>
            <ul>
              {this.state.list.map(e =>
                  <li key={e.key}>{e.item}</li>
              )}
            </ul>
          </div>
        </div>
    );
  };
}

export default LoopStatement;`,
};

const ConditionalStatementCode = {
  type: 'typescript',
  desc: 'ConditionalStatement.tsx',
  code: `import React, {Component} from 'react';

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
        <div className="conditionalStatement">
          <div className="hwTitle">Conditional statement</div>
          {content}

          {(this.state.flag) ?
              <div>true</div>
              :
              <>
                <div>false</div>
                <div>false</div>
              </>
          }
        </div>
    );
  };
}

export default ConditionalStatement;`,
};

const StyleClassBindingCode = {
  type: 'typescript',
  desc: 'StyleClassBinding.tsx',
  code: `import React, {Component} from 'react';

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

export default StyleClassBinding;`,
};

export { LoopStatementCode, ConditionalStatementCode, StyleClassBindingCode };

import React, {Component} from 'react';

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

export default ConditionalStatement;

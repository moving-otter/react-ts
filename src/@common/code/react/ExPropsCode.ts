const RequiredPropsCode = {
  type: 'typescript',
  desc: 'Required Props with TypeScript',
  code: `import React from 'react';

type props = {
  propsOne: string;
  propsTwo: string;
}

const RequiredProps: React.FC<props> = ({propsOne, propsTwo}) => {
  return (
      <div className="requiredProps">
        {propsOne} / {propsTwo}
      </div>
  )
};

export default RequiredProps;
`,
};

const DynamicPropsClassCode = {
  type: 'typescript',
  desc: 'DynamicPropsClass.tsx',
  code: `import React, {Component} from 'react';

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
          <div className="hwBlueMarker">{this.state.title} - class</div>
          <div>{this.props.name}</div>
          <div>{this.props.age}</div>
          <button onClick={this.handleTitle}>Change</button>
        </div>
    );
  };
}

export default DynamicPropsClass;
`
};

const DynamicPropsFcCode = {
  type: 'typescript',
  desc: 'DynamicPropsFc.tsx',
  code: `import React, {useState} from 'react';

type props = {
  name: string;
  age: number;
};

// Remove React.FC to apply optional props
const DynamicPropsFc = ({name, age}: props) => {
  const [title, setTitle] = useState<string>('Origin Title');

  const handleTitle = () => {
    if (title === 'Origin Title') {
      setTitle('Title Origin');
    } else {
      setTitle('Origin Title');
    }
  };

  return (
    <div className="dynamicProps">
      <div>{title} - fc</div>
      <div>{name}</div>
      <div>{age}</div>
      <button onClick={handleTitle}>Change</button>
    </div>
  );
};

DynamicPropsFc.defaultProps = {
  age: 10
};

export default DynamicPropsFc;`
};

export {
  RequiredPropsCode,
  DynamicPropsClassCode,
  DynamicPropsFcCode
};


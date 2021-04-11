import React from 'react';
import './Welcome.scoped.scss';
import {Highlighter} from '@common/highlighter';

const Welcome: React.FC = () => {
  return (
      <div className="welcome">
        <div className="hwTitle">
          Hello hw-dev-store!
        </div>

        <Highlighter desc={'index.tsx : project entry code'}>
          {`import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home/Home';
import './index.scss';
import rootReducer from "@store";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <Home/>
    </Provider>,
    document.getElementById('root')
);
`}
        </Highlighter>
      </div>
  );
};

export default Welcome;

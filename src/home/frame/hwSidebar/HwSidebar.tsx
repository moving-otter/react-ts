import React, {useState} from 'react';
import './HwSidebar.scoped.scss';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {toggleSidebar} from '@store/ui/UiAction';
import {HashRouter, NavLink} from 'react-router-dom';

type Child = {
  title: string;
  link: string;
}

type Item = {
  parent: string;
  childList: Array<Child>;
};

type render = {
  react: boolean;
  vue: boolean;
  html: boolean;
};

const HwSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const uiState = useSelector((state: RootStateOrAny) => state.UiReducer);
  const [itemList] = useState<Array<Item>>([
    {
      parent: 'React',
      childList: [
        {title: 'Welcome', link: '/'},
        {title: 'State', link: '/exState'},
        {title: 'Props', link: '/exProps'},
        {title: 'Basic Syntax', link: '/exBasicSyntax'},
        {title: 'Life Cycle', link: '/exLifeCycle'},
        {title: 'Veneer', link: '/exVeneer'},
        {title: 'Todd List - props', link: '/exTodoList'},
        {title: 'Todd List - redux', link: '/exReduxTodo'},
        {title: 'Redux', link: '/exRedux'},
        {title: 'Cart List', link: '/exCart'},
      ]
    },
    {
      parent: 'Vue',
      childList: [
        {title: 'v-directive', link: '/tbd'},
        {title: 'Life Cycle', link: '/tbd'},
        {title: 'app.js', link: '/tbd'},
      ]
    },
    {
      parent: 'Html',
      childList: [
        {title: 'summary-0', link: '/tbd'},
        {title: 'summary-1', link: '/tbd'},
        {title: 'summary-2', link: '/tbd'},
      ]
    },
  ]);
  const [renderStatus, setRenderStatus] = useState<render>({
    react: true,
    vue: true,
    html: true,
  });

  const toggleRenderStatus = (item) => {
    let newRenderStatus = renderStatus;
    switch(item) {
      case 'React':
        newRenderStatus.react = !(renderStatus.react);
        break;
      case 'Vue':
        newRenderStatus.vue = !(renderStatus.vue);
        break;
      case 'Html':
        newRenderStatus.html = !(renderStatus.html);
        break;
    }
    setRenderStatus({
      react: newRenderStatus.react,
      vue: newRenderStatus.vue,
      html: newRenderStatus.html
    });
  };


  const getItemBoolean = (item) => {
    switch(item) {
      case 'React': return renderStatus.react;
      case 'Vue': return renderStatus.vue;
      case 'Html': return renderStatus.html;
    }
  };

  return (
      <div className={`${(uiState.sidebar) ? 'show' : 'hide'} hwSidebar hwUserSelectNone`}>
        <div className="depth-1">
          <div className="closeArea">
            <div className="motto">
              <i>Simple is best</i>
            </div>

            <div className="close" onClick={() => dispatch(toggleSidebar())}>
              {/*close button*/}
              <label></label>
            </div>
          </div>

          {itemList.map((item) =>
            <div className="content-1" key={item.parent}>
              <div className="depth-2">
                <div className="area" onClick={() => toggleRenderStatus(item.parent)}>
                  <div className="depth-1-area">
                    {/*<label className="pointer opened">▶</label>*/}
                    <label className={`${getItemBoolean(item.parent) ? 'opened' : ''} pointer`}>
                      ▶
                    </label>
                    <label>{item.parent}</label>
                  </div>
                </div>

                <div className="content-2" style={
                  {display: getItemBoolean(item.parent) ? 'block' : 'none'}
                }>
                  {item.childList.map((child) =>
                    <div className="area" key={child.title}>
                      <HashRouter>
                        <NavLink exact to={child.link} className="depth-2-area">
                          {child.title}
                        </NavLink>
                      </HashRouter>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
  );
};

export default HwSidebar;

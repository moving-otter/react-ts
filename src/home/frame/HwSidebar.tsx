import styled from 'styled-components'
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useStoreState} from '@store/useStoreState'
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

export const HwSidebar = () => {
  const dispatch = useDispatch();
  const {uiState} = useStoreState()
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
      <Wrapper className={`${(uiState.sidebar) ? 'show' : 'hide'} hwUserSelectNone`}>
        <DepthFirst>
          <CloseArea>
            <Motto>
              <i>Simple is best</i>
            </Motto>

            <Close onClick={() => dispatch(toggleSidebar())}>
              {/*close button*/}
              <label></label>
            </Close>
          </CloseArea>

          {itemList.map((item) =>
            <ContentFirst key={item.parent}>
              <DepthSecond>
                <Area onClick={() => toggleRenderStatus(item.parent)}>
                  <DepthFirstArea>
                    {/*<label className="pointer opened">▶</label>*/}
                    <LabelPointer opened={getItemBoolean(item.parent)}>
                      ▶
                    </LabelPointer>
                    <label>{item.parent}</label>
                  </DepthFirstArea>
                </Area>

                <ContentSecond show={getItemBoolean(item.parent)}>
                  {item.childList.map((child) =>
                    <Area key={child.title}>
                      <HashRouter>
                        <DepthSecondArea exact to={child.link}>
                          {child.title}
                        </DepthSecondArea>
                      </HashRouter>
                    </Area>
                  )}
                </ContentSecond>
              </DepthSecond>
            </ContentFirst>
          )}
        </DepthFirst>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 450px;
  height: calc(100% - 45px);
  border-right: 1px solid #515658;
  resize: horizontal;
  overflow: auto;
`;

const DepthFirst = styled.div`
`;

const CloseArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  border-bottom: 1px solid #515658;
  opacity: 0.7;

  &:hover {
    background-color: rgb(49, 61, 74);
  }
`;

const Motto = styled.div`
  font-size: 14px;
  margin-left: 10px;
`;

const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 24px;
  font-size: 36px;
  margin-right: 5px;
  border: 1px solid transparent;

  label {
    width: 60%;
    height: 2px;
    background-color: rgb(187, 187, 187);
  }

  &:hover {
    border-radius: 5px;
    border: 1px solid rgb(140, 140, 140);
  }
`;

const ContentFirst = styled.div`
`;

const DepthSecond = styled.div`
`;

const Area = styled.div`
  &:hover {
    background-color: rgb(13, 41, 62);
  }
`;

const DepthFirstArea = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 35px;
  font-size: 16px;
`;

const ContentSecond = styled.div`
  margin-bottom: 15px;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const DepthSecondArea = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 30px;
  padding-left: 35px;
  color: #bbbbbb;
  border: 0;

  &.active {
    background-color: rgb(30, 55, 70);
  }
`;

const LabelPointer = styled.label`
  margin-right: 7px;
  font-size: 12px;
  margin-top: -2px;
  transform: ${props => (props.opened ? 'rotate(90deg)' : '')};
`;
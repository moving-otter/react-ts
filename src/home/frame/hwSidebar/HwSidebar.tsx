import React from 'react';
import './HwSidebar.scoped.scss';
import {useSelector, RootStateOrAny, useDispatch} from 'react-redux';
import {toggleSidebar} from '@store/ui/UiAction';

const HwSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const uiState = useSelector((state: RootStateOrAny) => state.UiReducer);

  return (
    <div className={`${(uiState.sidebar) ? 'show':'hide'} hwSidebar hwUserSelectNone`}>
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

        <div className="area" tabIndex={1}>
          <div className="depth-1-area">
            <label className="pointer opened">▶</label>
            <label>hw-dev-store</label>
          </div>
        </div>

        <div className="content-1">
          <div className="depth-2">
            <div className="area" tabIndex={1}>
              <div className="depth-2-area">
                <label className="pointer opened">▶</label>
                <label>React</label>
              </div>
            </div>

            <div className="content-2">
              <div className="area" tabIndex={1}>
                <div className="depth-3-area">Welcome</div>
              </div>
              <div className="area" tabIndex={1}>
                <div className="depth-3-area">State</div>
              </div>
              <div className="area" tabIndex={1}>
                <div className="depth-3-area">Props</div>
              </div>
              <div className="area" tabIndex={1}>
                <div className="depth-3-area">Basic Syntax</div>
              </div>
              <div className="area" tabIndex={1}>
                <div className="depth-3-area">Life Cycle</div>
              </div>
            </div>
          </div>

          <div className="depth-2">
            <div className="area" tabIndex={1}>
              <div className="depth-2-area">
                <label className="pointer opened">▶</label>
                <label>Vue</label>
              </div>
            </div>

            <div className="content-2">
              <div className="area" tabIndex={1}>
                <div className="depth-3-area">v-directive</div>
              </div>
              <div className="area" tabIndex={1}>
                <div className="depth-3-area">Life Cycle</div>
              </div>
              <div className="area" tabIndex={1}>
                <div className="depth-3-area">app.js desc</div>
              </div>
            </div>
          </div>

          <div className="depth-2">
            <div className="area" tabIndex={1}>
              <div className="depth-2-area">
                <label className="pointer">▶</label>
                <label>Html</label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HwSidebar;

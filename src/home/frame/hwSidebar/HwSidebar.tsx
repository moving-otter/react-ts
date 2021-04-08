import React from 'react';
import './HwSidebar.scoped.scss';

const HwSidebar: React.FC = () => {

  return (
    <div className="hwSidebar hwUserSelectNone">
      <div className="depth-1">
        <div className="closeArea">
          <div className="motto">
            <i>Simple is best</i>
          </div>

          <div className="close">
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

import React, { PureComponent } from 'react';

export default class LoadingWave extends PureComponent {
  render() {
    return (
      <div className="loading-wave">
        <div className="loading-wave__rect loading-wave__rect--rect-1" key="0"></div>
        <div className="loading-wave__rect loading-wave__rect--rect-2" key="1"></div>
        <div className="loading-wave__rect loading-wave__rect--rect-3" key="2"></div>
        <div className="loading-wave__rect loading-wave__rect--rect-4" key="3"></div>
        <div className="loading-wave__rect loading-wave__rect--rect-5" key="4"></div>
      </div>
    );
  }
}

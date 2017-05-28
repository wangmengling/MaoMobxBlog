import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class Home extends Component {
  render() {
    return (
      <div>
        <button onClick={this.onChangeContent}>
          come : {this.props.homeState.content}
        </button>
        <DevTools />
      </div>
    );
  }

  onChangeContent = () => {
    this.props.homeState.changeContent();
  }
};

export default Home;

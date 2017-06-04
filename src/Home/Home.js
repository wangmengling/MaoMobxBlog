import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Summary from '../Summary'
import './Home.scss'

@observer
class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <Summary />
        <DevTools />
      </div>
    );
  }

  onChangeContent = () => {
    this.props.homeState.changeContent();
  }
};

export default Home;

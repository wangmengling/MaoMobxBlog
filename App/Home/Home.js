import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Summary from '../Summary/Summary'
import './Home.scss'

@observer
class Home extends Component {
  render() {
    const articleLists = this.props.homeState.articleList;
    const listItems = articleLists.map((data) =>
        <Summary aritcleData={data} />
    );
    return (
      <div className='Home'>
        {listItems}
        <DevTools />
        <button className="buttons">asdfasdf</button>
      </div>
    );
  }

  onChangeContent = () => {
    this.props.homeState.changeContent();
  }
};

export default Home;

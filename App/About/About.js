import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class About extends Component {
  render() {
    return (
      <div>
        About:About  {this.props.aboutState.content}
      </div>
    );
  }

  onChangeContent = () => {
    this.props.aboutState.changeContent();
  }
};

export default About;

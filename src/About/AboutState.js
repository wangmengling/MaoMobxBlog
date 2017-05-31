import { observable } from 'mobx';

class AboutState {
  @observable content = "About Me!";

  constructor() {
    
  }

  changeContent() {
    this.content = "My Name Is WangGuoZhong!";
  }
}

export default AboutState;
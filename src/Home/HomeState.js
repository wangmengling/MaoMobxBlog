import { observable } from 'mobx';

class HomeState {
  @observable content = "Welcome My World !";

  constructor() {
    
  }

  changeContent() {
    this.content = "My Name Is WangGuoZhong!";
  }
}

export default HomeState;
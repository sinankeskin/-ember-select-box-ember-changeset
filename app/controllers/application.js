import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class ApplicationController extends Controller {
  @inject store;

  get bars() {
    return this.store.findAll('bar');
  }

  @action
  handleSelectFoo(foo) {
    console.log(`Selected ${foo.name}`);
  }

  @action
  handleSelectBar(bar) {
    console.log(`Selected ${bar.name}`);
  }
}

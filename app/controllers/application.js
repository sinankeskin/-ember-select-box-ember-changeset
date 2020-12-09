import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @action
  handleSelectFoo(foo) {
    console.log(`Selected ${foo.name}`);
  }
}

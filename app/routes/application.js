import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import Changeset from 'ember-changeset';

export default class ApplicationRoute extends Route {
  @inject store;

  model() {
    return this.store.findAll('foo');
  }

  setupController(controller, model) {
    controller.foos = model;
    controller.foo2 = this.store.peekRecord('foo', 2);

    controller.changeset = new Changeset(controller.foo2, this.validateFoo);

    console.log(controller.changeset);
  }

  validateFoo() {
    return true;
  }
}

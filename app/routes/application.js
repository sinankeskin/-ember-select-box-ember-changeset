import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import Changeset from 'ember-changeset';
import { bar2, bars } from '../utils/bars';

export default class ApplicationRoute extends Route {
  @inject store;

  model() {
    return this.store.findAll('foo');
  }

  setupController(controller, model) {
    controller.foos = model;
    controller.foo2 = this.store.peekRecord('foo', 2);
    controller.foo2Changeset = new Changeset(controller.foo2, this.validateFoo);
    console.log(controller.foo2Changeset);

    controller.bars = bars;
    controller.bar2 = bar2;
    controller.bar2Proxy = new Proxy(bar2, {});
    console.log(controller.bar2Proxy);
  }

  validateFoo() {
    return true;
  }
}

import Changeset from 'ember-changeset';
import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class ApplicationRoute extends Route {
  @inject store;

  model() {
    return this.store.findRecord('foo', 2);
  }

  setupController(controller, model) {
    controller.fooChangeset = new Changeset(model, this.validateFoo);

    console.log('Foo', controller.fooChangeset.get('name'));
  }

  validateFoo() {
    return true;
  }
}

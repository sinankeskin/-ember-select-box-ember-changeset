import RESTAdapter from '@ember-data/adapter/rest';

export default class FooAdapter extends RESTAdapter {
  findRecord(store, type, id) {
    return {
      foo: {
        id,
        name: `Foo ${id}`,
        bar: id,
      },
    };
  }
}

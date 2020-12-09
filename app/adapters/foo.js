import RESTAdapter from '@ember-data/adapter/rest';

export default class FooAdapter extends RESTAdapter {
  findAll() {
    return {
      foos: [
        {
          id: 1,
          name: 'Foo 1'
        },
        {
          id: 2,
          name: 'Foo 2'
        },
        {
          id: 3,
          name: 'Foo 3'
        }
      ]
    };
  }
}

import RESTAdapter from '@ember-data/adapter/rest';

export default class BarAdapter extends RESTAdapter {
  findAll() {
    return {
      bars: [
        {
          id: 1,
          name: 'Bar 1',
        },
        {
          id: 2,
          name: 'Bar 2',
        },
        {
          id: 3,
          name: 'Bar 3',
        },
      ],
    };
  }
}

/* eslint-disable import/no-extraneous-dependencies, global-require */

import _keys from 'lodash/keys';
import Immutable from 'immutable';
import React from 'react';
import { Text } from 'react-native';

const data = {

  EMPTY_DATA: Immutable.List(),

  LIST_DATA: Immutable.List([
    'l',
    'i',
    's',
    't',
  ]),

  MAP_DATA: Immutable.Map({
    1: 'm',
    2: 'a',
    3: 'p',
  }),

  MAP_DATA_COMPLEX: Immutable.Map({
    first: [
      'm',
      'a',
      'p',
    ],
    second: [
      'foo',
    ],
    third: [
    ],
    fourth: [
      'bar',
    ],
  }),

  SET_DATA: Immutable.Set([
    'one',
    'two',
    'three',
  ]),

};

const renderers = {

  /**
   * @param {*} rowData
   */
  renderRow: (rowData) => {
    return <Text>{JSON.stringify(rowData)}</Text>;
  },

  /**
   * @param {Object} sectionData
   * @param {String} category
   */
  renderSectionHeader: (sectionData, category) => {
    return <Text header>{`${category} (${_keys(sectionData).length} items)`}</Text>;
  },

};

const mocks = {

  /**
   * Mock ScrollView so that it doesn't contain any props when rendered by ListView.
   * @returns {ImmutableListView}
   */
  getImmutableListViewWithoutProps() {
    jest.resetModules();

    // eslint-disable-next-line react/prop-types
    const mockScrollView = (props) => React.createElement('ScrollView', {}, props.children);
    jest.doMock('ScrollView', () => mockScrollView);

    return require('../ImmutableListView').default;
  },

};

export {
  data,
  renderers,
  mocks,
};
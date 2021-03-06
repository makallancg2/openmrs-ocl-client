import React from 'react';
import { mount } from 'enzyme';
import Router from 'react-mock-router';
import { createMockStore } from 'redux-test-utils';
import { Provider } from 'react-redux';
import {
  Paginations,
  mapStateToProps,
} from '../../../components/bulkConcepts/component/Pagination';
import concepts from '../../__mocks__/concepts';

const store = createMockStore({
  bulkConcepts: {
    bulkConcepts: [],
    currentPage: 1,
  },
});
jest.useFakeTimers();

jest.mock('react-notify-toast');

describe('Test suite for Paginations component', () => {
  it('it should show current page', () => {
    const props = {
      setCurrentPage: jest.fn(),
      currentPage: 1,
      fetchBulkConcepts: jest.fn(),
      filterConcept: jest.fn(),
      concepts: [concepts],
      loading: false,
      datatypes: ['text'],
      classes: ['Diagnosis'],
      match: {
        params: {
          type: 'users',
          typeName: 'emasys',
          collectionName: 'dev-org',
          language: 'en',
          dictionaryName: 'CIEL',
        },
      },
      addToFilterList: jest.fn(),
      addConcept: jest.fn(),
      previewConcept: jest.fn(),
      fetchFilteredConcepts: jest.fn(),
      showFrom: jest.fn(),
      showTo: jest.fn(),
      getLastPage: jest.fn(),
      firstDictionaryIndex: 1,
      dictionaries: 10,
      lastPage: 2,
      setNextPage: jest.fn(),
      setPreviousPage: jest.fn(),
      view: true,
    };
    const wrapper = mount(<Provider store={store}>
      <Router>
        <Paginations {...props} />
      </Router>
    </Provider>);
    expect(wrapper.find('h6').text()).toEqual('1');
  });
  it('should render without breaking', () => {
    const props = {
      setCurrentPage: jest.fn(),
      currentPage: 1,
      fetchBulkConcepts: jest.fn(),
      filterConcept: jest.fn(),
      concepts: [concepts],
      loading: false,
      datatypes: ['text'],
      classes: ['Diagnosis'],
      match: {
        params: {
          type: 'users',
          typeName: 'emasys',
          collectionName: 'dev-org',
          language: 'en',
          dictionaryName: 'CIEL',
        },
      },
      addToFilterList: jest.fn(),
      addConcept: jest.fn(),
      previewConcept: jest.fn(),
      fetchFilteredConcepts: jest.fn(),
      showFrom: jest.fn(),
      showTo: jest.fn(),
      getLastPage: jest.fn(),
      firstDictionaryIndex: 1,
      dictionaries: 10,
      lastPage: 2,
      setNextPage: jest.fn(),
      setPreviousPage: jest.fn(),
      view: true,
    };
    const wrapper = mount(<Provider store={store}>
      <Router>
        <Paginations {...props} />
      </Router>
    </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
  it('it should go to next page', () => {
    const props = {
      setCurrentPage: jest.fn(),
      currentPage: 1,
      firstDictionaryIndex: 1,
      dictionaries: 10,
      lastPage: 2,
      setNextPage: jest.fn(),
      setPreviousPage: jest.fn(),
      view: true,
    };
    const wrapper = mount(<Provider store={store}>
      <Router>
        <Paginations {...props} />
      </Router>
    </Provider>);
    wrapper.find('.fa-angle-double-right').simulate('click');
    expect(wrapper.find('Paginations').instance().props.currentPage + 1).toEqual(2);
  });
  it('should test mapStateToProps', () => {
    const initialState = {
      bulkConcepts: {
        bulkConcepts: [],
        currentPage: 1,
      },
    };
    expect(mapStateToProps(initialState).currentPage).toEqual(1);
  });
});

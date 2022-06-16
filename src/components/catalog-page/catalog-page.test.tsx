import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import CatalogPage from './catalog-page';
import {mockGuitars, mockComments} from '../../const/mock';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const storeWithoutData = mockStore({
  DATA: {
    isDataLoaded: false,
    isCommentsLoaded: false,
  },
});

const storeWithData = mockStore({
  DATA: {
    isDataLoaded: true,
    isCommentsLoaded: true,
    guitars: mockGuitars,
    comments: mockComments,
    curPagination: 1,
    guitarNumber: 3,
    curGuitar: null,
  },
});

describe('Component: СatalogPage', () => {

  it('If the data is not loaded should render Loader', () => {
    render(
      <Provider store={storeWithoutData}>
        <Router history={history}>
          <CatalogPage />
        </Router>
      </Provider>);

    expect(screen.getByText(/Загрузка/i)).toBeInTheDocument();
    expect(screen.queryByText(/Каталог гитар/i)).not.toBeInTheDocument();
  });

  it('If the data is loaded should render CatalogPage without Loader', () => {
    render(
      <Provider store={storeWithData}>
        <Router history={history}>
          <CatalogPage />
        </Router>
      </Provider>);

    expect(screen.getByText(/Каталог гитар/i)).toBeInTheDocument();
    expect(screen.queryByText(/Загрузка/i)).not.toBeInTheDocument();
  });
});

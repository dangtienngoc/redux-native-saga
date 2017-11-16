import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducers';
import rootSaga from './sagas';

export default function configureStore() {

    // create the saga middleware
    const sagaMiddleware = createSagaMiddleware();

    const enhancer = compose(
        applyMiddleware(sagaMiddleware, logger),
    );

    // mount it on the Store
    const store = createStore(
        reducer,
        enhancer
    );

    // then run the saga
    sagaMiddleware.run(rootSaga);
    return store;
}
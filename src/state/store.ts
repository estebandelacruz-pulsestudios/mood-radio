import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root.reducer';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

/**
 * Configures the starting state for the application.
 * @param preloadedState for the state startup.
 * @returns {Store<S>} initial state.
 */
const configureStore = () => {

    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
        // composeWithDevTools(middleware),
    );

    sagaMiddleware.run(rootSaga);
    console.info('trigger');

    return store;
};

export default configureStore;

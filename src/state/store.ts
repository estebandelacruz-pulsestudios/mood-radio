import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { persistStore } from 'redux-persist';
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
        // composeWithDevTools(middleware),
    );

    sagaMiddleware.run(rootSaga);

    return [store, persistStore(store)];
};

export default configureStore;

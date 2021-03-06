import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // local storage so stays in browserscache
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';


const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['form'] // only persist the form number
};

let middleware = [reduxPromise, reduxThunk];

if(process.env.NODE_ENV !== 'production'){
  middleware = [...middleware] // setup for logger, removed logger
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware),
);

export const persistor = persistStore(store);


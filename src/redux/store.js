import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// const middlewares = [logger];
const middlewares = [];

//an env = environment variable which can only be accessed thru the process. 
//This is useful because it allows  us to know whether or not our app is being sered in development. 
// when we push to production when we called Yarn build it tells the thing thats is serving are application that needs
// to switch this node env variable over to production 
// That means in usual console.log will print out the redux state for coder, 
//but we dont want to make it happen  on heroku or any server => using this method to hide logger
if (process.env.NODE_ENV !== 'development') {
        middlewares.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistStore };


import { createStore } from "redux";
import rootReducer from './reducers/videos'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

// const store = createStore(reducer, {
//     suggestionList: [],
//     categoryList: []
// })

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['selectedMovie']
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {persistor, store}
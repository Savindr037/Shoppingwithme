import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./service/reducers/index";

const persistConfig = {
    key: 'persist-store',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store_persistor = persistStore(store)

export default store;
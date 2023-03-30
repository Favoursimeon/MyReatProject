import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from './cartSlice'
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// The key specifies the ID of the persist object and the storage determines the type of storage being used.
const persistConfig = {
  key: 'root',
  storage: storage,
};

// Combine all the reducers from slices in your app
const rootReducer = combineReducers({
cart: cartReducer
});

// Create a persistent reducer 1st arg: config for persist reducer. 2nd arg: combined reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

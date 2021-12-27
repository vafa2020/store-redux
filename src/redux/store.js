import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ['user'] // which reducer want to store
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };

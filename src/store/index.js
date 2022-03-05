import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {profileReducer} from './profile/reducer';
import {chatsReducer} from './chats/reducer';
import { messagesReducer } from "./messages/reducer";
import { booksReducer } from "./books/reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    books: booksReducer
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "gbMessenger",
    storage, 
  };
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)
export const persistor = persistStore(store);


 
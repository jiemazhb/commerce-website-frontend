import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import themeReducer from "./themeSlice";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

// 单独配置 persist
const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: ["mode", "primaryColor"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
};

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    cart: persistedCartReducer,
    categories: categoryReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;

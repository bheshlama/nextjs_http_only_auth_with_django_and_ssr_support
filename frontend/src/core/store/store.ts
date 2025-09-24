import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { DeepPartial } from "lib/utils";
// QUERIES
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import { advDeclineChartQuery } from "core/queries/AdvDeclineChartQuery/advDeclineChart";
// import { performanceTableFiltersQuery } from "core/queries/PerformanceTableQuery/performanceTableFilters";
// import { supplierTableQuery } from "core/queries/SupplierTableQuery/supplierQuery";
// import { materialCategoryQuery } from "core/queries/MaterialCategoryQuery/materialCategoryQuery";
// import { productCategoryQuery } from "core/queries/ProductCategoryQuery/productCategoryQuery";
// import { shopEssentialCategoryQuery } from "core/queries/ShopEssentialCategoryQuery/shopEssentialCategoryQuery";

// SLICES
import appRootReducer from "core/slices/appSlice";
import authRootReducer from "core/slices/authRootSlice";
// import remainingRootReducer from "core/slices/remainingSlice";
// import materialReducer from "core/slices/materialByCategorySice/materialsByCategorySlice";
// import productReducer from "core/slices/productByCategorySice/productsByCategorySlice";
// import shopEssentialsReducer from "core/slices/shopEssentialByCategorySice/shopEssentialsByCategorySlice";

// Combine all reducers
const rootReducers = combineReducers({
  //   [supplierTableQuery.reducerPath]: supplierTableQuery.reducer,
  //   [materialCategoryQuery.reducerPath]: materialCategoryQuery.reducer,
  //   [productCategoryQuery.reducerPath]: productCategoryQuery.reducer,
  //   [shopEssentialCategoryQuery.reducerPath]: shopEssentialCategoryQuery.reducer,
  appRoot: appRootReducer,
  authRoot: authRootReducer,
  //   remainingRoot: remainingRootReducer,
  //   materialRoot: materialReducer,
  //   productRoot: productReducer,
  //   shopEssentialRoot: shopEssentialsReducer,
});

export type TRootState = {
  [K in keyof typeof rootReducers]: ReturnType<(typeof rootReducers)[K]>;
};

// Combine all middleware
const QueryMiddleware = [
  // supplierTableQuery.middleware,
  // materialCategoryQuery.middleware,
  // productCategoryQuery.middleware,
  // shopEssentialCategoryQuery.middleware,
];

export function initStore(preloadedState?: DeepPartial<TRootState>) {
  return configureStore({
    reducer: rootReducers,
    preloadedState, // ---------------------- NOTE: preloadedState refers to the initial state of the store
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(QueryMiddleware),
    devTools: process.env.NODE_ENV !== "production",
  });
}

let store: ReturnType<typeof initStore> | undefined;

export function initializeStore(preloadedState?: DeepPartial<TRootState>) {
  if (typeof window === "undefined") {
    // Server: fresh store for each request
    return initStore(preloadedState);
  }

  // Client: reuse store
  if (!store) {
    store = initStore(preloadedState);
  } else if (preloadedState) {
    // Merge preloaded state with existing client state
    store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
  }

  return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<ReturnType<typeof initStore>["getState"]>;
export type AppDispatch = ReturnType<ReturnType<typeof initStore>["dispatch"]>;
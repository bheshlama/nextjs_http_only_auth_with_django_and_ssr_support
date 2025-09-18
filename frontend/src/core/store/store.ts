import { configureStore, combineReducers } from "@reduxjs/toolkit";

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
const rootReducers = {
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
};

// Combine all middleware
const QueryMiddleware = [
  //   supplierTableQuery.middleware,
  //   materialCategoryQuery.middleware,
  //   productCategoryQuery.middleware,
  //   shopEssentialCategoryQuery.middleware,
];

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(QueryMiddleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const state: RootState = store.getState();

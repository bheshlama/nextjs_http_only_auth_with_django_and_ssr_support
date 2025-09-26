import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
  UnknownAction,
} from "@reduxjs/toolkit";

// QUERIES
// import { supplierTableQuery } from "core/queries/SupplierTableQuery/supplierQuery";

// SLICES
import appRootReducer from "core/slices/appSlice";
import authRootReducer from "core/slices/authRootSlice";
// import remainingRootReducer from "core/slices/remainingSlice";
// import materialReducer from "core/slices/materialByCategorySice/materialsByCategorySlice";
// import productReducer from "core/slices/productByCategorySice/productsByCategorySlice";
// import shopEssentialsReducer from "core/slices/shopEssentialByCategorySice/shopEssentialsByCategorySlice";

// Combine all reducers
const rootReducers = combineReducers({
  // [supplierTableQuery.reducerPath]: supplierTableQuery.reducer,
  // [materialCategoryQuery.reducerPath]: materialCategoryQuery.reducer,
  // [productCategoryQuery.reducerPath]: productCategoryQuery.reducer,
  // [shopEssentialCategoryQuery.reducerPath]: shopEssentialCategoryQuery.reducer,

  appRoot: appRootReducer,
  authRoot: authRootReducer,
  // remainingRoot: remainingRootReducer,
  // materialRoot: materialReducer,
  // productRoot: productReducer,
  // shopEssentialRoot: shopEssentialsReducer,
});

// Infer the root state type from the combined reducers
export type TRootState = ReturnType<typeof rootReducers>;

// Combine all middleware (using 'any[]' for the array type due to commented code)
const QueryMiddleware: any[] = [
  // supplierTableQuery.middleware,
  // materialCategoryQuery.middleware,
  // productCategoryQuery.middleware,
  // shopEssentialCategoryQuery.middleware,
];

/**
 * Factory function to create a new store instance. Used for both server and client initialization.
 * @param preloadedState The initial state used for SSR hydration (Partial<TRootState> is required by RTK).
 */
export function initStore(preloadedState?: Partial<TRootState>) {
  return configureStore({
    reducer: rootReducers,
    preloadedState, // Used for hydrating the state from the server
    middleware: (getDefaultMiddleware) =>
      // Type assertion necessary if QueryMiddleware contains RTK Query middleware
      getDefaultMiddleware().concat(QueryMiddleware as any),
    devTools: process.env.NODE_ENV !== "production", // Enable devtools only in development
  });
}

// Global store reference for the client-side singleton pattern
let store: ReturnType<typeof initStore> | undefined;

/**
 * Initializes the store. Creates a fresh store on the server, reuses a singleton on the client.
 */
export function initializeStore(preloadedState?: Partial<TRootState>) {
  if (typeof window === "undefined") {
    // Server: Create a fresh store instance for every request to avoid state leakage
    return initStore(preloadedState);
  }

  // Client: Create the store only once (singleton)
  if (!store) {
    store = initStore(preloadedState);
  }

  return store;
}

type AppStore = ReturnType<typeof initStore>;

export type RootState = TRootState; // RootState is the type of the entire store state (TRootState from above)
export type AppDispatch = AppStore["dispatch"]; // AppDispatch is explicitly inferred from the store's dispatch function.

// AppThunk type for use with createAsyncThunk actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string> | UnknownAction
>;
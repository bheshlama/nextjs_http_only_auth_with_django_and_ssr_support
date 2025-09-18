import {
  PERFORMANCE_TABLE_ANALYTICS_TAB,
  PERFORMANCE_TABLE_FUNDAMENTAL_TAB,
  PERFORMANCE_TABLE_SECTOR_TAB,
  PERFORMANCE_TABLE_STOCK_TAB,
  PERFORMANCE_TABLE_TECHNICAL_TAB,
  SUPPLIER_TABLE_DRAWER_GENERAL_TAB,
  // SUPPLIER_TABLE_DRAWER_PAYMENT_TAB,
  CUSTOMER_TABLE_DRAWER_GENERAL_TAB,
  QUICK_ENTRY_TABLE_SHOP_ESSENTIALS_TAB,
  QUICK_ENTRY_TABLE_MATERIALS_TAB,
  QUICK_ENTRY_TABLE_PRODUCTS_TAB,
  // CUSTOMER_TABLE_DRAWER_PAYMENT_TAB,
} from "core/consts";
import { IndexCodeType } from "core/types/enums";
import { HIGHLIGHT_CHART_TYPE_AREA, HIGHLIGHT_CHART_TYPE_HEATMAP, HIGHLIGHT_CHART_TYPE_OHLC } from "core/utils/consts";

export type IQUERYNOPARAMS = undefined | "";

export type AnyObject = {
  [key: string]: any;
};

export interface ITool {
  id: number;
  title: string;
  link: string;
}

export interface IAccordionMenuNav {
  [category: string]: ITool[] | ITool | IAccordionMenuNav;
}

export type ISectorGroups = "index" | "sectors";

export type ISectorItem = {
  id: string;
  value: IndexCodeType;
  label: string;
};

export type ISectorMarketSectors = Record<ISectorGroups, ISectorItem[]>;

export type IIndexTimeFrameItem = {
  identifier: string;
  title: string;
};

export type IHighlightChartType =
  | typeof HIGHLIGHT_CHART_TYPE_AREA
  | typeof HIGHLIGHT_CHART_TYPE_HEATMAP
  | typeof HIGHLIGHT_CHART_TYPE_OHLC;

export type IChartItemSelection = {
  identifier: IHighlightChartType;
  title: string;
};

// Roles
export type IRoles = 1 | 2 | 3;

// Performance Tables:
export type IPerformanceTableTabsCode =
  | typeof PERFORMANCE_TABLE_SECTOR_TAB
  | typeof PERFORMANCE_TABLE_STOCK_TAB
  | typeof PERFORMANCE_TABLE_FUNDAMENTAL_TAB
  | typeof PERFORMANCE_TABLE_TECHNICAL_TAB
  | typeof PERFORMANCE_TABLE_ANALYTICS_TAB;

export type IPerformanceTabItem = {
  identifier: IPerformanceTableTabsCode;
  title: string;
};

// Quick Entry Tables:
export type IQuickEntryTableTypesCode =
  | typeof QUICK_ENTRY_TABLE_SHOP_ESSENTIALS_TAB
  | typeof QUICK_ENTRY_TABLE_MATERIALS_TAB
  | typeof QUICK_ENTRY_TABLE_PRODUCTS_TAB;

export type IQuickEntryTableTypeItem = {
  identifier: IQuickEntryTableTypesCode;
  title: string;
};

// Supplier Table:
// export type ISupplierTableDrawerTabsCode =
//   | typeof SUPPLIER_TABLE_DRAWER_GENERAL_TAB
//   | typeof SUPPLIER_TABLE_DRAWER_PAYMENT_TAB;
export type ISupplierTableDrawerTabsCode = typeof SUPPLIER_TABLE_DRAWER_GENERAL_TAB;

export type ISupplierTableDrawerTabItem = {
  identifier: ISupplierTableDrawerTabsCode;
  title: string;
};

// Drawer Table:
export type ICustomerTableDrawerTabsCode = typeof CUSTOMER_TABLE_DRAWER_GENERAL_TAB;

export type ICustomerTableDrawerTabItem = {
  identifier: ICustomerTableDrawerTabsCode;
  title: string;
};

export type ITableDrawerTabsCode = ISupplierTableDrawerTabsCode | ICustomerTableDrawerTabsCode;

export type ITableDrawerTab = ISupplierTableDrawerTabItem | ICustomerTableDrawerTabItem;

export interface ITableContainerBoundingClientRect {
  width: number;
  height: number;
}

export interface ICategory {
  id: number;
  user_id: number;
  parent_id: number | null;
  name: string;
  image: string | null;
  created_at: string;
  updated_at: string;
  parent_name?: string;
}

export interface IEntry {
  id: number;
  user_id: number;
  category_id: number;
  supplier_id: number | null;
  name: string;
  element: string;
  element_quality: number | null;
  grams: number;
  active: boolean;
  purchased_cost: number;
  extra_cost: number | null;
  mark_up_type: string;
  mark_up: number;
  sale_price: number;
  quantity: number;
  reorder_point: number | null;
  preferred_quantity: number | null;
  low_stock_warning: boolean;
  low_stock_warning_quantity: number | null;
  image: string | null;
  description: string | null;
  comments_or_notes: string | null;
}

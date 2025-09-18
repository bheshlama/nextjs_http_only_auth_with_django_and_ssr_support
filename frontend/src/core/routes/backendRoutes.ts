export const backendRoutes = {
  // Auth
  auth: {
    user: "/api/account/user",
    register: "/api/account/register",
    login: "/api/token/",
    verify: "/api/token/verify/",
    refresh: "api/token/refresh/",
  },

  // supplier
  suppliers: "/api/suppliers",
  selectedSuppliers: "/api/selected-suppliers",

  // customer
  customers: "/api/customers",
  selectedCustomers: "/api/selected-customers",

  // entries
  materialCategories: "/api/material-categories",
  selectedMaterialCategories: "/api/selected-material-categories",
  materials: "/api/materials",
  materialsByCategory: "/api/materials/category",
  selectedMaterials: "/api/selected-materials",

  productCategories: "/api/product-categories",
  selectedProductCategories: "/api/selected-product-categories",
  products: "/api/products",
  productsByCategory: "/api/products/category",
  selectedProducts: "/api/selected-products",

  shopEssentialCategories: "/api/shop-essential-categories",
  selectedShopEssentialCategories: "/api/selected-shop-essential-categories",
  shopEssentials: "/api/shop-essentials",
  shopEssentialsByCategory: "/api/shop-essentials/category",
  selectedShopEssentials: "/api/selected-shop-essentials",
};

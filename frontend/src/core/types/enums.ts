// Social Accounts
export enum SOCIAL_ACCOUNT_TYPE {
  GOOGLE = "google",
  FACEBOOK = "facebook",
}

// ---------------------------------------------------------------
// Org Status
export enum IOrgStatus {
  ACTIVE = "active",
  MERGED = "merged",
  SUSPENDED = "suspended",
  DELISTED = "delisted",
}

// Org List Groups
export enum IOrgGroup {
  MUTUAL = "mutual",
  ORDINARY = "ordinary",
  PROMOTER = "promoter",
  DEBENTURE = "debenture",
  PREFERENCE = "preference",
}

// Org List Sectors
export enum IOrgSector {
  BANKING = "banking",
  TRADING = "tradings",
  COMMERCIAL_BANK = "commercial_banks",
  DEV_BANK = "development_banks",
  FINANCE = "finance",
  HOTEL_AND_TOURISM = "hotels_and_tourism",
  HYDRO = "hydro_power",
  INVESTMENT = "investment",
  LIFE_INSURANCE = "life_insurance",
  MANU_AND_PROCESSING = "manufacturing_and_processing",
  MICRO_FINANCE = "microfinance",
  MUTUAL_FUND = "mutual_fund",
  NON_LIFE_INSURANCE = "non_life_insurance",
  OTHERS = "others",
}

// Nepse Index
export const IndexCode = {
  indx: "INDX",
  seni: "SENI",
  floi: "FLOI",
  sfli: "SFLI",
  bani: "BANI",
  devi: "DEVI",
  hoti: "HOTI",
  hydi: "HYDI",
  invi: "INVI",
  lifi: "LIFI",
  mani: "MANI",
  mici: "MICI",
  muti: "MUTI",
  noni: "NONI",
  trai: "TRAI",
  fini: "FINI",
  othi: "OTHI",
} as const;

export type IndexCodeType = (typeof IndexCode)[keyof typeof IndexCode];

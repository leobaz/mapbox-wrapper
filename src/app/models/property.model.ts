import { FloorPlans } from './floorplans.model';

export interface Property {
  adminFee: number;
  appFee: number;
  city: string;
  email: string;
  favorite: boolean;
  floorplans: FloorPlans[];
  geocode: {
    Longitude: string;
    Latitude: string;
    Percision: string;
    IsValid: boolean;
  };
  highValueAmenities: string[];
  listID: number;
  management: string;
  managementOffices: string[];
  name: string;
  neighborhood: string;
  notes: string;
  numUnits: number;
  officeHours: string;
  onsiteManager: string;
  paidUtilities: string[];
  parking: {
    attached: boolean;
    breezeway: boolean;
    propertyID: number;
    reserved: boolean;
    reservedFeeMin: number;
    reservedFeeMax: number;
    covered: boolean;
    coveredFeeMax: number;
    coveredFeeMin: number;
    detached: boolean;
    detachedFeeMax: number;
    detachedFeeMin: number;
    garage: boolean;
    garageFeeMax: number;
    garageFeeMin: number;
  };
  petInfo: {
    allowed: boolean;
    extraRent: number;
    limit: number;
    weight: number;
    breedRestriction: boolean;
    nonRefundableFee: number;
  };
  phone: string;
  photos: string[];
  propertyAmenities: string[];
  propertyID: number;
  regionalEmail: string;
  regionalName: string;
  regionalPhone: string;
  role: string;
  schoolsInfo: {
    propertyID: number;
    district: string;
    elementry: string;
    intermediate: string;
    middle: string;
    high: string;
  };
  section8: boolean;
  seniorHousing: boolean;
  specials: string;
  streetAddress: string;
  studentHousting: boolean;
  unitAmenities: string[];
  url: string;
  yearBuilt: number;
  yearRenovated: number;
}

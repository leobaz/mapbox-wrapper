import { Property } from 'src/app/models/property.model';
import * as SelectedItemActions from '../actions/selected-item.actions';

const initialState: Property = {
  adminFee: null,
  appFee: null,
  city: null,
  email: null,
  favorite: null,
  floorplans: [],
  geocode: {
    Longitude: null,
    Latitude: null,
    Percision: null,
    IsValid: null,
  },
  highValueAmenities: [],
  listID: null,
  management: null,
  managementOffices: [],
  name: null,
  neighborhood: null,
  notes: null,
  numUnits: null,
  officeHours: null,
  onsiteManager: null,
  paidUtilities: [],
  parking: {
    attached: null,
    breezeway: null,
    propertyID: null,
    reserved: null,
    reservedFeeMin: null,
    reservedFeeMax: null,
    covered: null,
    coveredFeeMax: null,
    coveredFeeMin: null,
    detached: null,
    detachedFeeMax: null,
    detachedFeeMin: null,
    garage: null,
    garageFeeMax: null,
    garageFeeMin: null,
  },
  petInfo: {
    allowed: null,
    extraRent: null,
    limit: null,
    weight: null,
    breedRestriction: null,
    nonRefundableFee: null,
  },
  phone: null,
  photos: [],
  propertyAmenities: [],
  propertyID: null,
  regionalEmail: null,
  regionalName: null,
  regionalPhone: null,
  role: null,
  schoolsInfo: {
    propertyID: null,
    district: null,
    elementry: null,
    intermediate: null,
    middle: null,
    high: null,
  },
  section8: null,
  seniorHousing: null,
  specials: null,
  streetAddress: null,
  studentHousting: null,
  unitAmenities: [],
  url: null,
  yearBuilt: null,
  yearRenovated: null,
};

export function selectedItemReducer(
  state: Property = initialState,
  action: SelectedItemActions.Actions
) {
  switch (action.type) {
    case SelectedItemActions.SET_SELECTED_ITEM:
      return { ...state, ...action.payload };
    case SelectedItemActions.RESET_SELECTED_ITEM:
      return { ...initialState };
    default:
      return state;
  }
}

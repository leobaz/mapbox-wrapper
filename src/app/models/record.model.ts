import { FloorPlans } from './floorplans.model';

export interface Record {
  city: string;
  favorite: boolean;
  floorplans: FloorPlans[];
  geocode: {
    IsValid: boolean;
    Latitude: string;
    Longitude: string;
    Percision: string;
  };
  highValueAmenities: string[];
  highestSentCommissions: number;
  listID: number;
  order: number;
  propertyID: number;
  name: string;
  streetAddress: string;
  state: string;
  pets: boolean;
  washerDry: string;
  photo: string;
  onsiteManager: null;
  management: null;
  proximity: number;
  section8: boolean;
  seniorHousing: boolean;
  studentHousting: boolean;
  paidUtilities: string[];
}

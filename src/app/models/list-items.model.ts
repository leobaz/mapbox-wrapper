import { Record } from './record.model';
export interface ListItems {
  agentInfo: {
    firstname: string;
    lastname: string;
    company: string;
    splashMessage: string;
    customHeader: string;
  };
  records: Record[];
  role: string;
  showContactInfo: boolean;
}

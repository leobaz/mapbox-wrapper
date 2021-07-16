import { ListItems } from '../models/list-items.model';
import { Property } from '../models/property.model';

export interface AppState {
  readonly listItems: ListItems;
  readonly selectedItem: Property;
}

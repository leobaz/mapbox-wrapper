import { ListItems } from 'src/app/models/list-items.model';
import * as ListItemsActions from '../actions/list-items.actions';

const initialState: ListItems = {
  agentInfo: {
    firstname: null,
    lastname: null,
    company: null,
    splashMessage: null,
    customHeader: null,
  },
  records: [],
  role: null,
  showContactInfo: null,
};

export function listItemsReducer(
  state: ListItems = initialState,
  action: ListItemsActions.Actions
) {
  switch (action.type) {
    case ListItemsActions.SET_LIST_ITEMS:
      return { ...state, ...action.payload };
    case ListItemsActions.RESET_LIST_ITEMS:
      return { ...initialState };
    default:
      return state;
  }
}

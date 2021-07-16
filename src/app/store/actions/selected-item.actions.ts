import { Action } from '@ngrx/store';

export const SET_SELECTED_ITEM = '[SELECTED_ITEM] Set';
export const RESET_SELECTED_ITEM = '[SELECTED_ITEM] Reset';

export class SetSelectedItem implements Action {
  readonly type = SET_SELECTED_ITEM;

  constructor(public payload: any) {}
}

export class ResetSelectedItem implements Action {
  readonly type = RESET_SELECTED_ITEM;
}

export type Actions = SetSelectedItem | ResetSelectedItem;

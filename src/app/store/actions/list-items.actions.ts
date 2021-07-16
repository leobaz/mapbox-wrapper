import { Action } from '@ngrx/store';

export const SET_LIST_ITEMS = '[LIST_ITEMS] Set';
export const RESET_LIST_ITEMS = '[LIST_ITEMS] Reset';

export class SetListItems implements Action {
  readonly type = SET_LIST_ITEMS;

  constructor(public payload: any) {}
}

export class ResetListItems implements Action {
  readonly type = RESET_LIST_ITEMS;
}

export type Actions = SetListItems | ResetListItems;

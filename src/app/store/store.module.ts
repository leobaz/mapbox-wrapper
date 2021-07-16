import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { listItemsReducer } from './reducers/list-items.reducer';
import { selectedItemReducer } from './reducers/selected-item.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      listItems: listItemsReducer,
      selectedItem: selectedItemReducer,
    }),
  ],
})
export class AppStoreModule {}

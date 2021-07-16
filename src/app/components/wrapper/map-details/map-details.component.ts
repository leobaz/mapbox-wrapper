import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListItems } from 'src/app/models/list-items.model';
import { Property } from 'src/app/models/property.model';
import { MapService } from 'src/app/services/map.service';
import { AppState } from 'src/app/store/app.state';
import * as SelectedItemActions from '../../../store/actions/selected-item.actions';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.scss'],
})
export class MapDetailsComponent implements OnInit {
  listItems: ListItems;
  selectedItem: Property;

  constructor(private store: Store<AppState>, private mapService: MapService) {}

  ngOnInit(): void {
    this.getListItemsFromAppStore();
    this.getSelectedItemFromAppStore();
  }

  getListItemsFromAppStore(): void {
    this.store.select('listItems').subscribe((listItems) => {
      this.listItems = { ...listItems };
    });
  }

  getSelectedItemFromAppStore(): void {
    this.store.select('selectedItem').subscribe((item) => {
      this.selectedItem = { ...item };
    });
  }

  resetSelectedItemFromAppStore(): void {
    this.store.dispatch(new SelectedItemActions.ResetSelectedItem());
  }

  back(): void {
    this.resetSelectedItemFromAppStore();
    this.mapService.resetView();
  }
}

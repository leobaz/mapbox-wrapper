import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as mapboxgl from 'mapbox-gl';
import { ListItems } from 'src/app/models/list-items.model';
import { Property } from 'src/app/models/property.model';
import { Record } from 'src/app/models/record.model';
import { MapService } from 'src/app/services/map.service';
import { AppState } from 'src/app/store/app.state';
import * as ListItemsActions from '../../../store/actions/list-items.actions';
import * as SelectedItemActions from '../../../store/actions/selected-item.actions';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  marker: any;
  listItems: ListItems;

  constructor(private mapService: MapService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.map = this.mapService.buildMap();

    this.mapService.getRecords(5363950).subscribe((res) => {
      this.listItems = res;
      this.updateListItemsInAppStore();
      res.records.forEach((record) => {
        this.addMarker(
          +record.geocode.Latitude,
          +record.geocode.Longitude,
          record
        );
      });
    });
  }

  addMarker(lat: number, lng: number, record: Record): void {
    this.marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(this.map);

    this.marker._element.addEventListener('click', () => {
      this.getPropertyItem(record);
      this.map.flyTo({
        center: [lng, lat],
        zoom: 20,
      });
    });
  }

  updateListItemsInAppStore(): void {
    this.store.dispatch(new ListItemsActions.SetListItems(this.listItems));
  }

  updateSelectedItemInAppStore(item: Property): void {
    this.store.dispatch(new SelectedItemActions.SetSelectedItem(item));
  }

  getPropertyItem(record: Record): void {
    this.mapService
      .getProperty(record.listID, record.propertyID)
      .subscribe((res) => {
        this.updateSelectedItemInAppStore(res);
      });
  }
}

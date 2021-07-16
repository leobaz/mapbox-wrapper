import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ListItems } from '../models/list-items.model';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map: mapboxgl.Map;
  lat = 32.699780997799746;
  lng = -97.3619023159175;
  zoom = 12;

  constructor(private http: HttpClient) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: environment.mapbox.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
    });
    return this.map;
  }

  getRecords(listId: number, receipt?: any): Observable<ListItems> {
    const params = new HttpParams()
      .set('listID', listId.toString())
      .set('token', environment.api.token)
      .set('receipt', receipt);

    return this.http.get<ListItems>(
      `${environment.api.link}/List/json/listItems.aspx`,
      {
        params,
      }
    );
  }

  resetView() {
    this.map.flyTo({
      center: [this.lng, this.lat],
      zoom: this.zoom,
    });
  }

  getProperty(listId: number, propertyId: number): Observable<Property> {
    const params = new HttpParams()
      .set('listID', listId.toString())
      .set('token', environment.api.token)
      .set('propertyID', propertyId.toString());

    return this.http.get<Property>(
      `${environment.api.link}/List/json/propertyItem.aspx`,
      {
        params,
      }
    );
  }
}

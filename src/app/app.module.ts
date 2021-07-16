import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapDetailsComponent } from './components/wrapper/map-details/map-details.component';
import { MapComponent } from './components/wrapper/map/map.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { MaterialModule } from './material.module';
import { AppStoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WrapperComponent,
    MapDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

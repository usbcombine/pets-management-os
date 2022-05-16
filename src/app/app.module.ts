import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PetsComponent } from './components/pets/pets.component';
import { PetsListComponent } from './components/pets/pets-list/pets-list.component';
import { PetDetailsComponent } from './components/pets/pet-details/pet-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StateModule } from './state/state.module';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { PetsFilterComponent } from './components/pets/pets-filter/pets-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetsListComponent,
    PetDetailsComponent,
    SpinnerOverlayComponent,
    PetsFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    StateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

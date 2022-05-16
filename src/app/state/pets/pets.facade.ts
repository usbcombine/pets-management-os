import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Pet, PetStatuses } from 'src/app/models/pet.model';
import * as PetsActions from './pets.actions';
import * as PetsSelectors from './pets.selectors';

@Injectable({ providedIn: 'root' })
export class PetsFacade {
  loaded$ = this.store.pipe(select(PetsSelectors.getPetsLoaded));
  allPets$ = this.store.pipe(select(PetsSelectors.getAllPets));
  selectedPet$ = this.store.pipe(select(PetsSelectors.getSelectedPet));
  selectedStatus$ = this.store.pipe(select(PetsSelectors.getSelectedStatus));

  constructor(private store: Store) {}

  loadPets(status: PetStatuses = PetStatuses.Available) {
    this.dispatch(PetsActions.loadPets({ status }));
  }

  selectPet(selectedId: string | null) {
    this.dispatch(PetsActions.selectPet({ selectedId }));
  }

  selectPetsStatus(selectedStatus: PetStatuses) {
    this.dispatch(PetsActions.selectPetsStatus({ selectedStatus }));
  }

  savePet(pet: Pet) {
    if (pet.id) {
      this.updatePet(pet);
    } else {
      this.createPet(pet);
    }
  }

  createPet(pet: Pet) {
    this.dispatch(PetsActions.createPet({ pet }));
  }

  updatePet(pet: Pet) {
    this.dispatch(PetsActions.updatePet({ pet }));
  }

  deletePet(pet: Pet) {
    this.dispatch(PetsActions.deletePet({ pet }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

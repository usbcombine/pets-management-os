import { createFeatureSelector, createSelector } from '@ngrx/store';
import { petsAdapter, PetsState, PETS_FEATURE_KEY } from './pets.reducer';

export const getPetState = createFeatureSelector<PetsState>(PETS_FEATURE_KEY);

const { selectAll, selectEntities } = petsAdapter.getSelectors();

export const getPetsLoaded = createSelector(
  getPetState,
  (state: PetsState) => state.loaded
);

export const getPetsError = createSelector(
  getPetState,
  (state: PetsState) => state.error
);

export const getSelectedStatus = createSelector(
  getPetState,
  (state: PetsState) => state.selectedStatus
);

export const getAllPets = createSelector(getPetState, (state: PetsState) =>
  selectAll(state)
);

export const getPetsEntities = createSelector(getPetState, (state: PetsState) =>
  selectEntities(state)
);

export const getSelectedPetId = createSelector(
  getPetState,
  (state: PetsState) => state.selectedId
);

export const getSelectedPet = createSelector(
  getPetsEntities,
  getSelectedPetId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : null;
  }
);

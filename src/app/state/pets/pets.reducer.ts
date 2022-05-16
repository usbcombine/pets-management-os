import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Pet, PetStatuses } from '../../models/pet.model';
import * as PetsActions from './pets.actions';

export const PETS_FEATURE_KEY = 'pets';

export interface PetsState extends EntityState<Pet> {
  loaded: boolean;
  error?: string | null;
  selectedId?: string | null;
  selectedStatus: PetStatuses;
}

export const petsAdapter: EntityAdapter<Pet> = createEntityAdapter();

export const initialState: PetsState = petsAdapter.getInitialState({
  loaded: false,
  selectedStatus: PetStatuses.Available,
});

const _petsReducer = createReducer(
  initialState,
  // Load Pets
  on(PetsActions.loadPets, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PetsActions.LoadPetsSuccess, (state, { pets }) =>
    petsAdapter.setAll(pets, { ...state, loaded: true, error: null })
  ),
  on(PetsActions.loadPetsFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  // Select Pet
  on(PetsActions.selectPet, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  // Select Pets Status
  on(PetsActions.selectPetsStatus, (state, { selectedStatus }) => ({
    ...state,
    selectedStatus,
  })),
  // Create Pet
  on(PetsActions.createPet, (state, { pet }) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PetsActions.createPetSuccess, (state, { pet }) => {
    const newState = { ...state, loaded: true, error: null };
    if (pet.status === state.selectedStatus) {
      return petsAdapter.addOne(pet, newState);
    } else {
      return petsAdapter.removeOne(String(pet.id), newState);
    }
  }),
  on(PetsActions.createPetFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  // Update Pet
  on(PetsActions.updatePet, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PetsActions.updatePetSuccess, (state, { pet }) => {
    const newState = { ...state, loaded: true, error: null };
    if (pet.status === state.selectedStatus) {
      return petsAdapter.updateOne(
        { id: String(pet.id), changes: pet },
        newState
      );
    } else {
      return petsAdapter.removeOne(String(pet.id), newState);
    }
  }),
  on(PetsActions.updatePetFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  // Delete Pet
  on(PetsActions.deletePet, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PetsActions.deletePetSuccess, (state, { pet }) =>
    petsAdapter.removeOne(String(pet.id), {
      ...state,
      loaded: true,
      error: null,
    })
  ),
  on(PetsActions.deletePetFailure, (status, { error }) => ({
    ...status,
    loaded: true,
    error,
  }))
);

export function petsReducer(state: PetsState | undefined, action: Action) {
  return _petsReducer(state, action);
}

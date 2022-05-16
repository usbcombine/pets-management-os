import { ActionReducerMap } from '@ngrx/store';
import * as fromPets from './pets/pets.reducer';

export interface AppState {
  [fromPets.PETS_FEATURE_KEY]: fromPets.PetsState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromPets.PETS_FEATURE_KEY]: fromPets.petsReducer,
};

import { createAction, props } from '@ngrx/store';
import { Pet, PetStatuses } from '../../models/pet.model';

// Load Pets
export const loadPets = createAction(
  '[Pet] Load Pets',
  props<{ status: PetStatuses }>()
);
export const LoadPetsSuccess = createAction(
  '[Pet] Load Pets Success',
  props<{ pets: Pet[] }>()
);
export const loadPetsFailure = createAction(
  '[Pet] Load Pets Failure',
  props<{ error: any }>()
);

// Select Pet
export const selectPet = createAction(
  '[Pet] Select Pet',
  props<{ selectedId: string | null }>()
);

// Select Pets Status
export const selectPetsStatus = createAction(
  '[Pet] Select Pets Status',
  props<{ selectedStatus: PetStatuses }>()
);

// Create Pet
export const createPet = createAction(
  '[Pet] Create Pet',
  props<{ pet: Pet }>()
);
export const createPetSuccess = createAction(
  '[Pet] Create Pet Success',
  props<{ pet: Pet }>()
);
export const createPetFailure = createAction(
  '[Pet] Create Pet Failure',
  props<{ error: any }>()
);

// Update Pet
export const updatePet = createAction(
  '[Pet] Update Pet',
  props<{ pet: Pet }>()
);
export const updatePetSuccess = createAction(
  '[Pet] Update Pet Success',
  props<{ pet: Pet }>()
);
export const updatePetFailure = createAction(
  '[Pet] Update Pet Failure',
  props<{ error: any }>()
);

// Delete Pet
export const deletePet = createAction(
  '[Pet] Delete Pet',
  props<{ pet: Pet }>()
);
export const deletePetSuccess = createAction(
  '[Pet] Delete Pet Success',
  props<{ pet: Pet }>()
);
export const deletePetFailure = createAction(
  '[Pet] Delete Pet Failure',
  props<{ error: any }>()
);

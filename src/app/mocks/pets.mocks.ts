import { PetStatuses } from '../models/pet.model';

export const mockPetsFacade = {
  loadPets: () => {},
  selectPet: () => {},
  selectPetsStatus: () => {},
  savePet: () => {},
  createPet: () => {},
  updatePet: () => {},
  deletePet: () => {},
};

export const mockPet = {
  id: '0',
  name: 'mock name',
  status: PetStatuses.Available,
};

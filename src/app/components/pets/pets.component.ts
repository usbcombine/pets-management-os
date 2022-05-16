import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet, PetStatuses } from 'src/app/models/pet.model';
import { PetsFacade } from 'src/app/state/pets/pets.facade';

@Component({
  selector: 'os-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent implements OnInit {
  addNewPet: boolean = false;
  pets$?: Observable<Pet[]> = this.petsFacade.allPets$;
  selectedPet$?: Observable<Pet | null | undefined> =
    this.petsFacade.selectedPet$;

  constructor(private petsFacade: PetsFacade) {}

  ngOnInit(): void {
    this.petsFacade.loadPets();
  }

  setAddNewPet(add: boolean) {
    this.addNewPet = add;
  }

  selectPet(id: string | null) {
    this.petsFacade.selectPet(id);
  }

  savePet(pet: Pet) {
    this.petsFacade.savePet(pet);
  }

  deletePet(pet: Pet) {
    this.petsFacade.deletePet(pet);
  }

  selectPetsStatus(status: PetStatuses) {
    this.petsFacade.selectPetsStatus(status);
    this.petsFacade.loadPets(status);
  }
}

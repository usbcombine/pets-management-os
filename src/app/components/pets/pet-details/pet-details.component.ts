import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Pet, PetStatuses } from 'src/app/models/pet.model';

const emptyPet: Pet = {
  id: null,
  name: '',
  status: PetStatuses.Available,
};

@Component({
  selector: 'os-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss'],
})
export class PetDetailsComponent {
  petStatuses = PetStatuses;
  petForm: FormGroup;
  idCtrl: FormControl;
  nameCtrl: FormControl;
  statusCtrl: FormControl;
  currentPet: Pet = emptyPet;
  @Input() set pet(p: Pet | null | undefined) {
    if (p) {
      this.currentPet = p;
    } else {
      this.currentPet = emptyPet;
    }

    this.setValue({
      id: this.currentPet.id,
      name: this.currentPet.name,
      status: this.currentPet.status,
    });
  }
  @Output() save = new EventEmitter<Pet>();

  constructor(private fb: FormBuilder) {
    this.idCtrl = this.fb.control(this.currentPet.id);
    this.nameCtrl = this.fb.control(this.currentPet.name, Validators.required);
    this.statusCtrl = this.fb.control(this.currentPet.status, []);
    this.petForm = this.fb.group({
      id: this.idCtrl,
      name: this.nameCtrl,
      status: this.statusCtrl,
    });
  }

  private setValue(pet: Pet) {
    this.petForm.setValue(pet);
  }

  submitForm() {
    this.save.emit(this.petForm.value);
  }

  reset() {
    this.petForm.patchValue({ name: '', status: PetStatuses.Available });
  }
}

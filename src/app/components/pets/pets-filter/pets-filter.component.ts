import { Component, EventEmitter, Output } from '@angular/core';
import { PetStatuses } from 'src/app/models/pet.model';

@Component({
  selector: 'os-pets-filter',
  templateUrl: './pets-filter.component.html',
  styleUrls: ['./pets-filter.component.scss'],
})
export class PetsFilterComponent {
  petStatuses = PetStatuses;
  @Output() changed = new EventEmitter();
}

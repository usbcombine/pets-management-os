import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'os-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
})
export class PetsListComponent {
  @Input() pets?: Pet[];
  @Output() selectionChanged = new EventEmitter();
  @Output() addClicked = new EventEmitter();
  @Output() refreshClicked = new EventEmitter();
  @Output() deleteClicked = new EventEmitter();
}

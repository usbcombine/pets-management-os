import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PetsFacade } from './state/pets/pets.facade';

@Component({
  selector: 'os-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  petsLoaded$: Observable<boolean> = this.petsFacade.loaded$;

  constructor(private petsFacade: PetsFacade) {}
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Pet } from 'src/app/models/pet.model';
import { PetsService } from 'src/app/services/pets.service';
import * as PetsActions from './pets.actions';

@Injectable()
export class PetsEffects {
  loadPets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetsActions.loadPets),
      mergeMap((action) =>
        this.petService.all(action.status).pipe(
          map((pets: Pet[]) => PetsActions.LoadPetsSuccess({ pets })),
          catchError((error) => of(PetsActions.loadPetsFailure(error)))
        )
      )
    )
  );

  createPet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetsActions.createPet),
      mergeMap((action) =>
        this.petService.create(action.pet).pipe(
          map((pet: Pet) => PetsActions.createPetSuccess({ pet })),
          catchError((error) => of(PetsActions.createPetFailure(error)))
        )
      )
    )
  );

  updatePet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetsActions.updatePet),
      mergeMap((action) =>
        this.petService.update(action.pet).pipe(
          map((pet: Pet) => PetsActions.updatePetSuccess({ pet: action.pet })),
          catchError((error) => of(PetsActions.updatePetFailure(error)))
        )
      )
    )
  );

  deletePet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetsActions.deletePet),
      mergeMap((action) =>
        this.petService.delete(action.pet).pipe(
          map((pet: Pet) => PetsActions.deletePetSuccess({ pet: action.pet })),
          catchError((error) => of(PetsActions.deletePetFailure(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private petService: PetsService) {}
}

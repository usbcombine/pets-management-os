import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { mockPet, mockPetsFacade } from 'src/app/mocks/pets.mocks';
import { PetsFacade } from 'src/app/state/pets/pets.facade';

import { PetsComponent } from './pets.component';

describe('PetsComponent', () => {
  let component: PetsComponent;
  let petsFacade: PetsFacade;
  let fixture: ComponentFixture<PetsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetsComponent],
      imports: [StoreModule.forRoot({})],
      providers: [{ provide: PetsFacade, useValue: mockPetsFacade }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsComponent);
    component = fixture.componentInstance;
    petsFacade = TestBed.inject(PetsFacade);
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Using of PetsListComponent', () => {
    it('renders a pets list', () => {
      const petsList = debugElement.query(By.css('os-pets-list'));
      expect(petsList).toBeTruthy();
    });

    it('passes pets to the list', () => {
      component.pets$ = of([mockPet]);
      component.pets$.subscribe(() => {
        fixture.detectChanges();
        const petsList = debugElement.query(By.css('os-pets-list'));
        expect(petsList.properties.pets).toEqual([mockPet]);
      });
    });

    it('listens for selecting pet', () => {
      const spy = spyOn(petsFacade, 'selectPet');
      const petsList = debugElement.query(By.css('os-pets-list'));
      petsList.triggerEventHandler('selectionChanged', mockPet.id);
      expect(component.addNewPet).toBe(false);
      expect(spy).toHaveBeenCalledWith(mockPet.id);
    });

    it('listens for adding', () => {
      const spy = spyOn(petsFacade, 'selectPet');
      const petsList = debugElement.query(By.css('os-pets-list'));
      petsList.triggerEventHandler('addClicked', null);
      expect(component.addNewPet).toBe(true);
      expect(spy).toHaveBeenCalledWith(null);
    });

    it('listens for refreshing', () => {
      const spy = spyOn(petsFacade, 'selectPet');
      const petsList = debugElement.query(By.css('os-pets-list'));
      petsList.triggerEventHandler('refreshClicked', null);
      expect(component.addNewPet).toBe(false);
      expect(spy).toHaveBeenCalledWith(null);
    });

    it('listens for deleting', () => {
      const spy = spyOn(petsFacade, 'deletePet');
      const petsList = debugElement.query(By.css('os-pets-list'));
      petsList.triggerEventHandler('deleteClicked', mockPet);
      expect(spy).toHaveBeenCalledWith(mockPet);
    });
  });

  describe('Using of PetDetailsComponent', () => {
    it('renders a pet details for selected pet and listens for saving', () => {
      component.selectedPet$ = of(mockPet);
      component.selectedPet$.subscribe(() => {
        fixture.detectChanges();
        const petDetails = debugElement.query(By.css('os-pet-details'));
        const spy = spyOn(petsFacade, 'savePet');
        petDetails.triggerEventHandler('save', mockPet);
        expect(spy).toHaveBeenCalledWith(mockPet);
      });
    });

    it('renders a pet details for a new pet and listens for saving', () => {
      component.addNewPet = true;
      fixture.detectChanges();
      const petDetails = debugElement.query(By.css('os-pet-details'));
      const spy = spyOn(petsFacade, 'savePet');
      petDetails.triggerEventHandler('save', mockPet);
      expect(spy).toHaveBeenCalledWith(mockPet);
    });
  });

  describe('Using of PetsFilterComponent', () => {
    it('listens for selecting pets status', () => {
      const spy = spyOn(petsFacade, 'selectPetsStatus');
      const petsFilter = debugElement.query(By.css('os-pets-filter'));
      petsFilter.triggerEventHandler('changed', mockPet.status);
      expect(spy).toHaveBeenCalledWith(mockPet.status);
    });
  });
});

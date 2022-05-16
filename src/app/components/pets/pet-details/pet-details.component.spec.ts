import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { mockPet } from 'src/app/mocks/pets.mocks';
import { Pet } from 'src/app/models/pet.model';
import { PetDetailsComponent } from './pet-details.component';

describe('PetDetailsComponent', () => {
  let component: PetDetailsComponent;
  let fixture: ComponentFixture<PetDetailsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetDetailsComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submits the form', () => {
    component.save.subscribe((pet: Pet) => {
      expect(pet).toEqual(mockPet);
    });

    const submitButton = debugElement.query(
      By.css('[data-testid="submit-button"]')
    );
    expect(submitButton.properties.disabled).toBe(true);

    component.pet = mockPet;

    fixture.detectChanges();
    expect(submitButton.properties.disabled).toBe(false);

    const petForm = debugElement.query(By.css('[data-testid="pet-form"]'));
    petForm.triggerEventHandler('submit', {});
    fixture.detectChanges();
  });
});

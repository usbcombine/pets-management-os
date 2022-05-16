import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetsFilterComponent } from './pets-filter.component';

describe('PetsFilterComponent', () => {
  let component: PetsFilterComponent;
  let fixture: ComponentFixture<PetsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetsFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

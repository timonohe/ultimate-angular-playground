import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentStylesBestPracitcesComponent } from './component-styles-best-pracitces.component';

describe('ComponentStylesBestPracitcesComponent', () => {
  let component: ComponentStylesBestPracitcesComponent;
  let fixture: ComponentFixture<ComponentStylesBestPracitcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentStylesBestPracitcesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentStylesBestPracitcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

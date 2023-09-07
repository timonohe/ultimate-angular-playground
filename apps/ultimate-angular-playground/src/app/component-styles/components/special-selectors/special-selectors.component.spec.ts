import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialSelectorsComponent } from './special-selectors.component';

describe('SpecialSelectorsComponent', () => {
  let component: SpecialSelectorsComponent;
  let fixture: ComponentFixture<SpecialSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialSelectorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

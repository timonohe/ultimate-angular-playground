import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentStylesViewComponent } from './component-styles-view.component';

describe('ComponentStylesViewComponent', () => {
  let component: ComponentStylesViewComponent;
  let fixture: ComponentFixture<ComponentStylesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentStylesViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentStylesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

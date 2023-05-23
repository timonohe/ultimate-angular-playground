import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentInteractionViewComponent } from './component-interaction-view.component';

describe('ComponentInteractionViewComponent', () => {
  let component: ComponentInteractionViewComponent;
  let fixture: ComponentFixture<ComponentInteractionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentInteractionViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentInteractionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectivesAndComponentCommunicationViewComponent } from './directives-and-component-communication-view.component';

describe('DirectivesAndComponentCommunicationViewComponent', () => {
  let component: DirectivesAndComponentCommunicationViewComponent;
  let fixture: ComponentFixture<DirectivesAndComponentCommunicationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivesAndComponentCommunicationViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      DirectivesAndComponentCommunicationViewComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

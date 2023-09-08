import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingStylesComponent } from './loading-styles.component';

describe('LoadingStylesComponent', () => {
  let component: LoadingStylesComponent;
  let fixture: ComponentFixture<LoadingStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingStylesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissioncontrolComponent } from './missioncontrol.component';

describe('MissioncontrolComponent', () => {
  let component: MissioncontrolComponent;
  let fixture: ComponentFixture<MissioncontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissioncontrolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MissioncontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

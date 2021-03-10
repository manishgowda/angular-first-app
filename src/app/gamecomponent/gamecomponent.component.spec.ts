import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamecomponentComponent } from './gamecomponent.component';

describe('GamecomponentComponent', () => {
  let component: GamecomponentComponent;
  let fixture: ComponentFixture<GamecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

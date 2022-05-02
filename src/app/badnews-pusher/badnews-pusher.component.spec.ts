import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadnewsPusherComponent } from './badnews-pusher.component';

describe('BadnewsPusherComponent', () => {
  let component: BadnewsPusherComponent;
  let fixture: ComponentFixture<BadnewsPusherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadnewsPusherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadnewsPusherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

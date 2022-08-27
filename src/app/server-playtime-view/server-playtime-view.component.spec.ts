import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerPlaytimeViewComponent } from './server-playtime-view.component';

describe('ServerPlaytimeViewComponent', () => {
  let component: ServerPlaytimeViewComponent;
  let fixture: ComponentFixture<ServerPlaytimeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerPlaytimeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerPlaytimeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

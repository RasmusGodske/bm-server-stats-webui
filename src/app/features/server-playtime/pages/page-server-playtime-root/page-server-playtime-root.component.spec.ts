import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServerPlaytimeRootComponent } from './page-server-playtime-root.component';

describe('ServerPlaytimeViewComponent', () => {
  let component: PageServerPlaytimeRootComponent;
  let fixture: ComponentFixture<PageServerPlaytimeRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageServerPlaytimeRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageServerPlaytimeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

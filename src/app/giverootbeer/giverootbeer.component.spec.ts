import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiverootbeerComponent } from './giverootbeer.component';

describe('GiverootbeerComponent', () => {
  let component: GiverootbeerComponent;
  let fixture: ComponentFixture<GiverootbeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiverootbeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiverootbeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

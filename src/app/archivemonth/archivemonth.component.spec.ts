import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivemonthComponent } from './archivemonth.component';

describe('ArchivemonthComponent', () => {
  let component: ArchivemonthComponent;
  let fixture: ComponentFixture<ArchivemonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivemonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivemonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

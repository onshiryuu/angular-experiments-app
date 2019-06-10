import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseformComponent } from './expertiseform.component';

describe('ExpertiseformComponent', () => {
  let component: ExpertiseformComponent;
  let fixture: ComponentFixture<ExpertiseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertiseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertiseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

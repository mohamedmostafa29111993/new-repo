import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProcessFormComponent } from './sub-process-form.component';

describe('SubProcessFormComponent', () => {
  let component: SubProcessFormComponent;
  let fixture: ComponentFixture<SubProcessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubProcessFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProcessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

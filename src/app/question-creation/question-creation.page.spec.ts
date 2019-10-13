import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCreationPage } from './question-creation.page';

describe('QuestionCreationPage', () => {
  let component: QuestionCreationPage;
  let fixture: ComponentFixture<QuestionCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCreationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InfoListMiniComponent } from './info-list-mini.component';

describe('InfoListMiniComponent', () => {
  let component: InfoListMiniComponent;
  let fixture: ComponentFixture<InfoListMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoListMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoListMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

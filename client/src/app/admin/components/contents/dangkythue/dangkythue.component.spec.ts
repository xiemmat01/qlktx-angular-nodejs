import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkythueComponent } from './dangkythue.component';

describe('DangkythueComponent', () => {
  let component: DangkythueComponent;
  let fixture: ComponentFixture<DangkythueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangkythueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkythueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

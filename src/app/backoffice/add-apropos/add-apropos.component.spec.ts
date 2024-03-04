import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAproposComponent } from './add-apropos.component';

describe('AddAproposComponent', () => {
  let component: AddAproposComponent;
  let fixture: ComponentFixture<AddAproposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAproposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

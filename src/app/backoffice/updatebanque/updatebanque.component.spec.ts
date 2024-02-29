import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebanqueComponent } from './updatebanque.component';

describe('UpdatebanqueComponent', () => {
  let component: UpdatebanqueComponent;
  let fixture: ComponentFixture<UpdatebanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatebanqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatebanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

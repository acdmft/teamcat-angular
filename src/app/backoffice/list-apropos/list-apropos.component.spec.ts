import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAproposComponent } from './list-apropos.component';

describe('ListAproposComponent', () => {
  let component: ListAproposComponent;
  let fixture: ComponentFixture<ListAproposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAproposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

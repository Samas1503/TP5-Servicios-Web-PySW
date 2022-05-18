import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearQRComponent } from './crear-qr.component';

describe('CrearQRComponent', () => {
  let component: CrearQRComponent;
  let fixture: ComponentFixture<CrearQRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearQRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

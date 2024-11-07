import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCarrousselComponent } from './mini-carroussel.component';

describe('MiniCarrousselComponent', () => {
  let component: MiniCarrousselComponent;
  let fixture: ComponentFixture<MiniCarrousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniCarrousselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCarrousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaPaineisComponent } from './coluna-paineis.component';

describe('ColunaPaineisComponent', () => {
  let component: ColunaPaineisComponent;
  let fixture: ComponentFixture<ColunaPaineisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColunaPaineisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColunaPaineisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

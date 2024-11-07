import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaInicialComponent } from './area-inicial.component';

describe('AreaInicialComponent', () => {
  let component: AreaInicialComponent;
  let fixture: ComponentFixture<AreaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaInicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandePainelComponent } from './grande-painel.component';

describe('GrandePainelComponent', () => {
  let component: GrandePainelComponent;
  let fixture: ComponentFixture<GrandePainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandePainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPainelComponent } from './mini-painel.component';

describe('MiniPainelComponent', () => {
  let component: MiniPainelComponent;
  let fixture: ComponentFixture<MiniPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniPainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

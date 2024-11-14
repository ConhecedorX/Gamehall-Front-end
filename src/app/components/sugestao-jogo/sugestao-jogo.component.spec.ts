import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugestaoJogoComponent } from './sugestao-jogo.component';

describe('SugestaoJogoComponent', () => {
  let component: SugestaoJogoComponent;
  let fixture: ComponentFixture<SugestaoJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugestaoJogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugestaoJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceTableComponent } from './sentence-table.component';

describe('SentenceTableComponent', () => {
  let component: SentenceTableComponent;
  let fixture: ComponentFixture<SentenceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

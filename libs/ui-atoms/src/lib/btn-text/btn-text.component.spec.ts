import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnTextComponent } from './btn-text.component';

describe('BtnTextComponent', () => {
  let component: BtnTextComponent;
  let fixture: ComponentFixture<BtnTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockquotesComponent } from './blockquotes.component';

describe('BlockquotesComponent', () => {
  let component: BlockquotesComponent;
  let fixture: ComponentFixture<BlockquotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockquotesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

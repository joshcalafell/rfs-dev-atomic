import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarRankingComponent } from './star-ranking.component';

describe('StarRankingComponent', () => {
  let component: StarRankingComponent;
  let fixture: ComponentFixture<StarRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRankingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

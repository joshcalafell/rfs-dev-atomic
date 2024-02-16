import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiCardCellComponent } from './ui-card-cell.component'

describe('UiCardCellComponent', () => {
	let component: UiCardCellComponent
	let fixture: ComponentFixture<UiCardCellComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiCardCellComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiCardCellComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

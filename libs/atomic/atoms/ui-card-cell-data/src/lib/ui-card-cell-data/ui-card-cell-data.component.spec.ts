import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiCardCellDataComponent } from './ui-card-cell-data.component'

describe('UiCardCellDataComponent', () => {
	let component: UiCardCellDataComponent
	let fixture: ComponentFixture<UiCardCellDataComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiCardCellDataComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiCardCellDataComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiCardCellHeaderComponent } from './ui-card-cell-header.component'

describe('UiCardCellHeaderComponent', () => {
	let component: UiCardCellHeaderComponent
	let fixture: ComponentFixture<UiCardCellHeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiCardCellHeaderComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiCardCellHeaderComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

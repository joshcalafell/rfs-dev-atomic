import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiTagComponent } from './ui-tag.component'

describe('UiTagComponent', () => {
	let component: UiTagComponent
	let fixture: ComponentFixture<UiTagComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiTagComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(UiTagComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FooterComponent } from './footer.component'

describe('FooterComponent', () => {
	let component: FooterComponent
	let fixture: ComponentFixture<FooterComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FooterComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(FooterComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render the footer', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('.my-footer')).toBeTruthy()
	})
})

// Path: libs/ui-organisms/src/lib/footer/footer.component.ts

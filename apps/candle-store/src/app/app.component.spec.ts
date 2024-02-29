import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { UiFooterComponent } from '@rfs-dev-atomic/ui-footer'
import { UiHeaderComponent } from '@rfs-dev-atomic/ui-header'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
	beforeEach(async () => {
		// { provide: 'BASE_URL', useValue: params.origin + params.baseUrl },
		await TestBed.configureTestingModule({
			imports: [
				AppComponent,
				UiHeaderComponent,
				UiFooterComponent,
				RouterTestingModule,
			],
		}).compileComponents()
	})

	it('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h1')?.textContent).toContain('CANDLE STORE')
	})

	it(`should have as title 'candle-store'`, () => {
		const fixture = TestBed.createComponent(AppComponent)
		const app = fixture.componentInstance
		expect(app.title).toEqual('CANDLE STORE')
	})

	it('should render title in a h1 tag', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h1')?.textContent).toContain('CANDLE STORE')
	})

	it('should render the header component', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('rfs-dev-atomic-ui-header')).toBeTruthy()
	})

	it('should render the router outlet', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('router-outlet')).toBeTruthy()
	})

	it('should render the footer component', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('rfs-dev-atomic-ui-footer')).toBeTruthy()
	})
})

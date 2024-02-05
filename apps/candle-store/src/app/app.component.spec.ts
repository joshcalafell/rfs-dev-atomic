import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HeaderComponent } from '@rfs-dev-atomic/ui-organisms'

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppComponent, RouterTestingModule, HeaderComponent],
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
})

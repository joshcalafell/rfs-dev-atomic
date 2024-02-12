import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChipComponent } from '@rfs-dev-atomic/ui-atoms'
import { ICandleProduct } from '../model/IProduct.model'

// Add 'as ICandleProduct[]' to explicitly type the array as ICandleProduct[]
@Component({
	selector: 'rfs-dev-atomic-product-list',
	standalone: true,
	imports: [CommonModule, ChipComponent],
	templateUrl: './product-list.component.html',
	styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() products: ICandleProduct[] = []
}

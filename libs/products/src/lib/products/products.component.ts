// eslint-disable-next-line @nx/enforce-module-boundaries
import { IEntity } from './../../../../../IEntity.model'
import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
	ICandleProduct,
	ProductListComponent,
} from '../product-list/product-list.component'
import { mockCandles } from './products.mock'

export interface IProductsList {
	products: ICandleProduct[]
	entity: IEntity
}

@Component({
	selector: 'rfs-dev-atomic-products',
	standalone: true,
	imports: [CommonModule, ProductsComponent, ProductListComponent],
	templateUrl: './products.component.html',
	styleUrl: './products.component.scss',
})
export class ProductsComponent {
	@Input() products = mockCandles
}

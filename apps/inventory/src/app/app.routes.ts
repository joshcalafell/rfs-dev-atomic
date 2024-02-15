import { Route } from '@angular/router'

export const appRoutes: Route[] = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () =>
			import('@rfs-dev-atomic/home').then((m) => m.HomeComponent),
	},
	{
		path: 'products',
		loadComponent: () =>
			import('@rfs-dev-atomic/products').then((m) => m.ProductsComponent),
	},
]

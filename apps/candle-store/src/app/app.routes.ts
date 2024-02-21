import { Route } from '@angular/router'

export const appRoutes: Route[] = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'products',
		loadComponent: () =>
			import('@rfs-dev-atomic/products').then((m) => m.ProductsComponent),
	},
	{
		path: 'products/:id',
		loadComponent: () =>
			import('@rfs-dev-atomic/product-detail').then(
				(m) => m.ProductDetailComponent
			),
	},
	{
		path: 'wishlist',
		loadComponent: () =>
			import('@rfs-dev-atomic/wishlist').then((m) => m.WishlistComponent),
	},
	{
		path: 'orders',
		loadComponent: () =>
			import('@rfs-dev-atomic/orders').then((m) => m.OrdersComponent),
	},
	{
		path: 'home',
		loadComponent: () =>
			import('@rfs-dev-atomic/home').then((m) => m.HomeComponent),
	},
	{
		path: 'about',
		loadComponent: () =>
			import('@rfs-dev-atomic/about').then((m) => m.AboutComponent),
	},
	{
		path: 'cart',
		loadComponent: () =>
			import('@rfs-dev-atomic/cart').then((m) => m.CartComponent),
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('@rfs-dev-atomic/contact').then((m) => m.ContactComponent),
	},
	{
		path: '404',
		loadComponent: () =>
			import('@rfs-dev-atomic/not-found').then((m) => m.NotFoundComponent),
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full',
	},
]

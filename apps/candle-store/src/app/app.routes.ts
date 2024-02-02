import { Route } from '@angular/router';

export const appRoutes: Route[] = [

  {
    path: 'home',
    component: void 0,
    //loadChildren: () => import('@rfs-dev-atomic/ui-templates').then(m => m.HomeModule),
  },
  {
    path: 'products',
    component: void 0,
    //loadChildren: () => import('@rfs-dev-atomic/ui-templates').then(m => m.ProductsModule),
  },
  {
    path: 'cart',
    component: void 0,
    //loadChildren: () => import('@rfs-dev-atomic/ui-templates').then(m => m.CartModule),
  },
  {
    path: 'wishlist',
    component: void 0,
    //loadChildren: () => import('@rfs-dev-atomic/ui-templates').then(m => m.WishlistModule),
  },
  {
    path: 'inventory',
    component: void 0,
   // loadChildren: () => import('@rfs-dev-atomic/ui-templates').then(m => m.InventoryModule),
  },
  {
    path: 'about',
    component: void 0,
   // loadChildren: () => import('@rfs-dev-atomic/ui-templates').then(m => m.AboutModule),
  },
  {
    path: 'contact',
    component: void 0,
    //loadChildren: () => import('@rfs-dev-atomic/ui-templates').then(m => m.ContactModule),
  },
  {
    path: 'article',
    component: void 0,
    //loadChildren: () => import('@rfs-dev-atomic/ui-templates').then(m => m.ArticleModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

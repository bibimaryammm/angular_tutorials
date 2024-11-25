import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductComponent
    },
    {
        path: 'about-us',
        component: AboutusComponent
    }, 
    {
        path: 'services',
        component: ServicesComponent
    }, {
        path: 'contact',
        component: ContactComponent
    },
    {path:'product-details',component:ProductDetailsComponent}
];

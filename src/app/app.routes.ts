import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddProductComponent } from './add-product/add-product.component';

export const routes: Routes = [
    {path:'user',component:UserProfileComponent},
    {path:'add-product',component:AddProductComponent}
    
];

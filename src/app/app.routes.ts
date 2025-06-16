import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { NgModule } from '@angular/core';
import { ServiceByStateComponent } from './service-by-state/service-by-state.component';
// import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'services', component: ServiceByStateComponent},
    // {path: 'department-details', component: DepartmentDetailsComponent}
    {path: 'service-details/:id', component:ServiceDetailsComponent},
    {path: '**', redirectTo: ''}
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule{}